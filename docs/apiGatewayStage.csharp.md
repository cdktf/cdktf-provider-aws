# `apiGatewayStage` Submodule <a name="`apiGatewayStage` Submodule" id="@cdktf/provider-aws.apiGatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayStage <a name="ApiGatewayStage" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage aws_api_gateway_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayStage(Construct Scope, string Id, ApiGatewayStageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings">PutAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings">PutCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings">ResetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled">ResetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize">ResetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings">ResetCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion">ResetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled">ResetXrayTracingEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccessLogSettings` <a name="PutAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings"></a>

```csharp
private void PutAccessLogSettings(ApiGatewayStageAccessLogSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `PutCanarySettings` <a name="PutCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings"></a>

```csharp
private void PutCanarySettings(ApiGatewayStageCanarySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `ResetAccessLogSettings` <a name="ResetAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings"></a>

```csharp
private void ResetAccessLogSettings()
```

##### `ResetCacheClusterEnabled` <a name="ResetCacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled"></a>

```csharp
private void ResetCacheClusterEnabled()
```

##### `ResetCacheClusterSize` <a name="ResetCacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize"></a>

```csharp
private void ResetCacheClusterSize()
```

##### `ResetCanarySettings` <a name="ResetCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings"></a>

```csharp
private void ResetCanarySettings()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId"></a>

```csharp
private void ResetClientCertificateId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentationVersion` <a name="ResetDocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion"></a>

```csharp
private void ResetDocumentationVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables"></a>

```csharp
private void ResetVariables()
```

##### `ResetXrayTracingEnabled` <a name="ResetXrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled"></a>

```csharp
private void ResetXrayTracingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayStage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayStage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayStage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings">CanarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn">ExecutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl">InvokeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn">WebAclArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput">AccessLogSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput">CacheClusterEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput">CacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput">CanarySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput">DocumentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput">VariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput">XrayTracingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled">XrayTracingEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessLogSettings`<sup>Required</sup> <a name="AccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings"></a>

```csharp
public ApiGatewayStageAccessLogSettingsOutputReference AccessLogSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CanarySettings`<sup>Required</sup> <a name="CanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings"></a>

```csharp
public ApiGatewayStageCanarySettingsOutputReference CanarySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn"></a>

```csharp
public string ExecutionArn { get; }
```

- *Type:* string

---

##### `InvokeUrl`<sup>Required</sup> <a name="InvokeUrl" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl"></a>

```csharp
public string InvokeUrl { get; }
```

- *Type:* string

---

##### `WebAclArn`<sup>Required</sup> <a name="WebAclArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn"></a>

```csharp
public string WebAclArn { get; }
```

- *Type:* string

---

##### `AccessLogSettingsInput`<sup>Optional</sup> <a name="AccessLogSettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput"></a>

```csharp
public ApiGatewayStageAccessLogSettings AccessLogSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `CacheClusterEnabledInput`<sup>Optional</sup> <a name="CacheClusterEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput"></a>

```csharp
public object CacheClusterEnabledInput { get; }
```

- *Type:* object

---

##### `CacheClusterSizeInput`<sup>Optional</sup> <a name="CacheClusterSizeInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput"></a>

```csharp
public string CacheClusterSizeInput { get; }
```

- *Type:* string

---

##### `CanarySettingsInput`<sup>Optional</sup> <a name="CanarySettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput"></a>

```csharp
public ApiGatewayStageCanarySettings CanarySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput"></a>

```csharp
public string ClientCertificateIdInput { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentationVersionInput`<sup>Optional</sup> <a name="DocumentationVersionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput"></a>

```csharp
public string DocumentationVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `XrayTracingEnabledInput`<sup>Optional</sup> <a name="XrayTracingEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput"></a>

```csharp
public object XrayTracingEnabledInput { get; }
```

- *Type:* object

---

##### `CacheClusterEnabled`<sup>Required</sup> <a name="CacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled"></a>

```csharp
public object CacheClusterEnabled { get; }
```

- *Type:* object

---

##### `CacheClusterSize`<sup>Required</sup> <a name="CacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; }
```

- *Type:* string

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentationVersion`<sup>Required</sup> <a name="DocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `XrayTracingEnabled`<sup>Required</sup> <a name="XrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled"></a>

```csharp
public object XrayTracingEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayStageAccessLogSettings <a name="ApiGatewayStageAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayStageAccessLogSettings {
    string DestinationArn,
    string Format
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}. |

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}.

---

### ApiGatewayStageCanarySettings <a name="ApiGatewayStageCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayStageCanarySettings {
    double PercentTraffic = null,
    System.Collections.Generic.IDictionary<string, string> StageVariableOverrides = null,
    object UseStageCache = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache">UseStageCache</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}. |

---

##### `PercentTraffic`<sup>Optional</sup> <a name="PercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}.

---

##### `StageVariableOverrides`<sup>Optional</sup> <a name="StageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}.

---

##### `UseStageCache`<sup>Optional</sup> <a name="UseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache"></a>

```csharp
public object UseStageCache { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}.

---

### ApiGatewayStageConfig <a name="ApiGatewayStageConfig" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayStageConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeploymentId,
    string RestApiId,
    string StageName,
    ApiGatewayStageAccessLogSettings AccessLogSettings = null,
    object CacheClusterEnabled = null,
    string CacheClusterSize = null,
    ApiGatewayStageCanarySettings CanarySettings = null,
    string ClientCertificateId = null,
    string Description = null,
    string DocumentationVersion = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    System.Collections.Generic.IDictionary<string, string> Variables = null,
    object XrayTracingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings">CanarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled">XrayTracingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}.

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}.

---

##### `AccessLogSettings`<sup>Optional</sup> <a name="AccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings"></a>

```csharp
public ApiGatewayStageAccessLogSettings AccessLogSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}

---

##### `CacheClusterEnabled`<sup>Optional</sup> <a name="CacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled"></a>

```csharp
public object CacheClusterEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.

---

##### `CacheClusterSize`<sup>Optional</sup> <a name="CacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}.

---

##### `CanarySettings`<sup>Optional</sup> <a name="CanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings"></a>

```csharp
public ApiGatewayStageCanarySettings CanarySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}.

---

##### `DocumentationVersion`<sup>Optional</sup> <a name="DocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}.

---

##### `XrayTracingEnabled`<sup>Optional</sup> <a name="XrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled"></a>

```csharp
public object XrayTracingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayStageAccessLogSettingsOutputReference <a name="ApiGatewayStageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayStageAccessLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayStageAccessLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---


### ApiGatewayStageCanarySettingsOutputReference <a name="ApiGatewayStageCanarySettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayStageCanarySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic">ResetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides">ResetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache">ResetUseStageCache</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercentTraffic` <a name="ResetPercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic"></a>

```csharp
private void ResetPercentTraffic()
```

##### `ResetStageVariableOverrides` <a name="ResetStageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```csharp
private void ResetStageVariableOverrides()
```

##### `ResetUseStageCache` <a name="ResetUseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache"></a>

```csharp
private void ResetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput">PercentTrafficInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput">StageVariableOverridesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput">UseStageCacheInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache">UseStageCache</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentTrafficInput`<sup>Optional</sup> <a name="PercentTrafficInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput"></a>

```csharp
public double PercentTrafficInput { get; }
```

- *Type:* double

---

##### `StageVariableOverridesInput`<sup>Optional</sup> <a name="StageVariableOverridesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverridesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCacheInput`<sup>Optional</sup> <a name="UseStageCacheInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput"></a>

```csharp
public object UseStageCacheInput { get; }
```

- *Type:* object

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache"></a>

```csharp
public object UseStageCache { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayStageCanarySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---



