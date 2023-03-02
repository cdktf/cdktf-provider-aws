# `apiGatewayUsagePlan` Submodule <a name="`apiGatewayUsagePlan` Submodule" id="@cdktf/provider-aws.apiGatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayUsagePlan <a name="ApiGatewayUsagePlan" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan aws_api_gateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlan(Construct Scope, string Id, ApiGatewayUsagePlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig">ApiGatewayUsagePlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig">ApiGatewayUsagePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages">PutApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings">PutQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings">PutThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages">ResetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode">ResetProductCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings">ResetQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings">ResetThrottleSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApiStages` <a name="PutApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages"></a>

```csharp
private void PutApiStages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* object

---

##### `PutQuotaSettings` <a name="PutQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings"></a>

```csharp
private void PutQuotaSettings(ApiGatewayUsagePlanQuotaSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `PutThrottleSettings` <a name="PutThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings"></a>

```csharp
private void PutThrottleSettings(ApiGatewayUsagePlanThrottleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `ResetApiStages` <a name="ResetApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages"></a>

```csharp
private void ResetApiStages()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProductCode` <a name="ResetProductCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode"></a>

```csharp
private void ResetProductCode()
```

##### `ResetQuotaSettings` <a name="ResetQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings"></a>

```csharp
private void ResetQuotaSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThrottleSettings` <a name="ResetThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings"></a>

```csharp
private void ResetThrottleSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayUsagePlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayUsagePlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayUsagePlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages">ApiStages</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings">QuotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings">ThrottleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput">ApiStagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput">ProductCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput">QuotaSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput">ThrottleSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode">ProductCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiStages`<sup>Required</sup> <a name="ApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages"></a>

```csharp
public ApiGatewayUsagePlanApiStagesList ApiStages { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `QuotaSettings`<sup>Required</sup> <a name="QuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings"></a>

```csharp
public ApiGatewayUsagePlanQuotaSettingsOutputReference QuotaSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a>

---

##### `ThrottleSettings`<sup>Required</sup> <a name="ThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings"></a>

```csharp
public ApiGatewayUsagePlanThrottleSettingsOutputReference ThrottleSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a>

---

##### `ApiStagesInput`<sup>Optional</sup> <a name="ApiStagesInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput"></a>

```csharp
public object ApiStagesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductCodeInput`<sup>Optional</sup> <a name="ProductCodeInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput"></a>

```csharp
public string ProductCodeInput { get; }
```

- *Type:* string

---

##### `QuotaSettingsInput`<sup>Optional</sup> <a name="QuotaSettingsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput"></a>

```csharp
public ApiGatewayUsagePlanQuotaSettings QuotaSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThrottleSettingsInput`<sup>Optional</sup> <a name="ThrottleSettingsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput"></a>

```csharp
public ApiGatewayUsagePlanThrottleSettings ThrottleSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProductCode`<sup>Required</sup> <a name="ProductCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode"></a>

```csharp
public string ProductCode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayUsagePlanApiStages <a name="ApiGatewayUsagePlanApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanApiStages {
    string ApiId,
    string Stage,
    object Throttle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle">Throttle</a></code> | <code>object</code> | throttle block. |

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}.

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}.

---

##### `Throttle`<sup>Optional</sup> <a name="Throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle"></a>

```csharp
public object Throttle { get; set; }
```

- *Type:* object

throttle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle ApiGatewayUsagePlan#throttle}

---

### ApiGatewayUsagePlanApiStagesThrottle <a name="ApiGatewayUsagePlanApiStagesThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanApiStagesThrottle {
    string Path,
    double BurstLimit = null,
    double RateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit">BurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}.

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```csharp
public double BurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

### ApiGatewayUsagePlanConfig <a name="ApiGatewayUsagePlanConfig" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object ApiStages = null,
    string Description = null,
    string Id = null,
    string ProductCode = null,
    ApiGatewayUsagePlanQuotaSettings QuotaSettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ApiGatewayUsagePlanThrottleSettings ThrottleSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages">ApiStages</a></code> | <code>object</code> | api_stages block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode">ProductCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings">QuotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings">ThrottleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `ApiStages`<sup>Optional</sup> <a name="ApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages"></a>

```csharp
public object ApiStages { get; set; }
```

- *Type:* object

api_stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProductCode`<sup>Optional</sup> <a name="ProductCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode"></a>

```csharp
public string ProductCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `QuotaSettings`<sup>Optional</sup> <a name="QuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings"></a>

```csharp
public ApiGatewayUsagePlanQuotaSettings QuotaSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `ThrottleSettings`<sup>Optional</sup> <a name="ThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings"></a>

```csharp
public ApiGatewayUsagePlanThrottleSettings ThrottleSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

### ApiGatewayUsagePlanQuotaSettings <a name="ApiGatewayUsagePlanQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanQuotaSettings {
    double Limit,
    string Period,
    double Offset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit">Limit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period">Period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset">Offset</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}. |

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}.

---

### ApiGatewayUsagePlanThrottleSettings <a name="ApiGatewayUsagePlanThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanThrottleSettings {
    double BurstLimit = null,
    double RateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit">BurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit"></a>

```csharp
public double BurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayUsagePlanApiStagesList <a name="ApiGatewayUsagePlanApiStagesList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanApiStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get"></a>

```csharp
private ApiGatewayUsagePlanApiStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiGatewayUsagePlanApiStagesOutputReference <a name="ApiGatewayUsagePlanApiStagesOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanApiStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle">PutThrottle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle">ResetThrottle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThrottle` <a name="PutThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```csharp
private void PutThrottle(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* object

---

##### `ResetThrottle` <a name="ResetThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```csharp
private void ResetThrottle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle">Throttle</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput">ThrottleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Throttle`<sup>Required</sup> <a name="Throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```csharp
public ApiGatewayUsagePlanApiStagesThrottleList Throttle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `ThrottleInput`<sup>Optional</sup> <a name="ThrottleInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```csharp
public object ThrottleInput { get; }
```

- *Type:* object

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiGatewayUsagePlanApiStagesThrottleList <a name="ApiGatewayUsagePlanApiStagesThrottleList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanApiStagesThrottleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get"></a>

```csharp
private ApiGatewayUsagePlanApiStagesThrottleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiGatewayUsagePlanApiStagesThrottleOutputReference <a name="ApiGatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanApiStagesThrottleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```csharp
private void ResetBurstLimit()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">BurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">BurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```csharp
public double BurstLimitInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `BurstLimit`<sup>Required</sup> <a name="BurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```csharp
public double BurstLimit { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApiGatewayUsagePlanQuotaSettingsOutputReference <a name="ApiGatewayUsagePlanQuotaSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanQuotaSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayUsagePlanQuotaSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---


### ApiGatewayUsagePlanThrottleSettingsOutputReference <a name="ApiGatewayUsagePlanThrottleSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayUsagePlanThrottleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit"></a>

```csharp
private void ResetBurstLimit()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput">BurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit">BurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput"></a>

```csharp
public double BurstLimitInput { get; }
```

- *Type:* double

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `BurstLimit`<sup>Required</sup> <a name="BurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit"></a>

```csharp
public double BurstLimit { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayUsagePlanThrottleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---



