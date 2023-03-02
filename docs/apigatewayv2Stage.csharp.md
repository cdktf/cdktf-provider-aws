# `apigatewayv2Stage` Submodule <a name="`apigatewayv2Stage` Submodule" id="@cdktf/provider-aws.apigatewayv2Stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Stage <a name="Apigatewayv2Stage" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage aws_apigatewayv2_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2Stage(Construct Scope, string Id, Apigatewayv2StageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings">PutAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings">PutDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings">PutRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings">ResetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy">ResetAutoDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings">ResetDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings">ResetRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables">ResetStageVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccessLogSettings` <a name="PutAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings"></a>

```csharp
private void PutAccessLogSettings(Apigatewayv2StageAccessLogSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `PutDefaultRouteSettings` <a name="PutDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings"></a>

```csharp
private void PutDefaultRouteSettings(Apigatewayv2StageDefaultRouteSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `PutRouteSettings` <a name="PutRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings"></a>

```csharp
private void PutRouteSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLogSettings` <a name="ResetAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings"></a>

```csharp
private void ResetAccessLogSettings()
```

##### `ResetAutoDeploy` <a name="ResetAutoDeploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy"></a>

```csharp
private void ResetAutoDeploy()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId"></a>

```csharp
private void ResetClientCertificateId()
```

##### `ResetDefaultRouteSettings` <a name="ResetDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings"></a>

```csharp
private void ResetDefaultRouteSettings()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRouteSettings` <a name="ResetRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings"></a>

```csharp
private void ResetRouteSettings()
```

##### `ResetStageVariables` <a name="ResetStageVariables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables"></a>

```csharp
private void ResetStageVariables()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2Stage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2Stage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2Stage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.executionArn">ExecutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.invokeUrl">InvokeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings">RouteSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList">Apigatewayv2StageRouteSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput">AccessLogSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput">AutoDeployInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput">DefaultRouteSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput">RouteSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput">StageVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy">AutoDeploy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables">StageVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessLogSettings`<sup>Required</sup> <a name="AccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings"></a>

```csharp
public Apigatewayv2StageAccessLogSettingsOutputReference AccessLogSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultRouteSettings`<sup>Required</sup> <a name="DefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings"></a>

```csharp
public Apigatewayv2StageDefaultRouteSettingsOutputReference DefaultRouteSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.executionArn"></a>

```csharp
public string ExecutionArn { get; }
```

- *Type:* string

---

##### `InvokeUrl`<sup>Required</sup> <a name="InvokeUrl" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.invokeUrl"></a>

```csharp
public string InvokeUrl { get; }
```

- *Type:* string

---

##### `RouteSettings`<sup>Required</sup> <a name="RouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings"></a>

```csharp
public Apigatewayv2StageRouteSettingsList RouteSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList">Apigatewayv2StageRouteSettingsList</a>

---

##### `AccessLogSettingsInput`<sup>Optional</sup> <a name="AccessLogSettingsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput"></a>

```csharp
public Apigatewayv2StageAccessLogSettings AccessLogSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `AutoDeployInput`<sup>Optional</sup> <a name="AutoDeployInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput"></a>

```csharp
public object AutoDeployInput { get; }
```

- *Type:* object

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput"></a>

```csharp
public string ClientCertificateIdInput { get; }
```

- *Type:* string

---

##### `DefaultRouteSettingsInput`<sup>Optional</sup> <a name="DefaultRouteSettingsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput"></a>

```csharp
public Apigatewayv2StageDefaultRouteSettings DefaultRouteSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RouteSettingsInput`<sup>Optional</sup> <a name="RouteSettingsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput"></a>

```csharp
public object RouteSettingsInput { get; }
```

- *Type:* object

---

##### `StageVariablesInput`<sup>Optional</sup> <a name="StageVariablesInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `AutoDeploy`<sup>Required</sup> <a name="AutoDeploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy"></a>

```csharp
public object AutoDeploy { get; }
```

- *Type:* object

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StageVariables`<sup>Required</sup> <a name="StageVariables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2StageAccessLogSettings <a name="Apigatewayv2StageAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageAccessLogSettings {
    string DestinationArn,
    string Format
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}. |

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

### Apigatewayv2StageConfig <a name="Apigatewayv2StageConfig" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiId,
    string Name,
    Apigatewayv2StageAccessLogSettings AccessLogSettings = null,
    object AutoDeploy = null,
    string ClientCertificateId = null,
    Apigatewayv2StageDefaultRouteSettings DefaultRouteSettings = null,
    string DeploymentId = null,
    string Description = null,
    string Id = null,
    object RouteSettings = null,
    System.Collections.Generic.IDictionary<string, string> StageVariables = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy">AutoDeploy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | default_route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings">RouteSettings</a></code> | <code>object</code> | route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables">StageVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}.

---

##### `AccessLogSettings`<sup>Optional</sup> <a name="AccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings"></a>

```csharp
public Apigatewayv2StageAccessLogSettings AccessLogSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `AutoDeploy`<sup>Optional</sup> <a name="AutoDeploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy"></a>

```csharp
public object AutoDeploy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}.

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}.

---

##### `DefaultRouteSettings`<sup>Optional</sup> <a name="DefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings"></a>

```csharp
public Apigatewayv2StageDefaultRouteSettings DefaultRouteSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

default_route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RouteSettings`<sup>Optional</sup> <a name="RouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings"></a>

```csharp
public object RouteSettings { get; set; }
```

- *Type:* object

route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `StageVariables`<sup>Optional</sup> <a name="StageVariables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}.

---

### Apigatewayv2StageDefaultRouteSettings <a name="Apigatewayv2StageDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageDefaultRouteSettings {
    object DataTraceEnabled = null,
    object DetailedMetricsEnabled = null,
    string LoggingLevel = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled"></a>

```csharp
public object DataTraceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `DetailedMetricsEnabled`<sup>Optional</sup> <a name="DetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```csharp
public object DetailedMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

### Apigatewayv2StageRouteSettings <a name="Apigatewayv2StageRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageRouteSettings {
    string RouteKey,
    object DataTraceEnabled = null,
    object DetailedMetricsEnabled = null,
    string LoggingLevel = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.routeKey">RouteKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.routeKey"></a>

```csharp
public string RouteKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}.

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.dataTraceEnabled"></a>

```csharp
public object DataTraceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `DetailedMetricsEnabled`<sup>Optional</sup> <a name="DetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.detailedMetricsEnabled"></a>

```csharp
public object DetailedMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2StageAccessLogSettingsOutputReference <a name="Apigatewayv2StageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageAccessLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue"></a>

```csharp
public Apigatewayv2StageAccessLogSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---


### Apigatewayv2StageDefaultRouteSettingsOutputReference <a name="Apigatewayv2StageDefaultRouteSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageDefaultRouteSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">ResetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetDetailedMetricsEnabled` <a name="ResetDetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```csharp
private void ResetDetailedMetricsEnabled()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">DetailedMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public object DataTraceEnabledInput { get; }
```

- *Type:* object

---

##### `DetailedMetricsEnabledInput`<sup>Optional</sup> <a name="DetailedMetricsEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```csharp
public object DetailedMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public object DataTraceEnabled { get; }
```

- *Type:* object

---

##### `DetailedMetricsEnabled`<sup>Required</sup> <a name="DetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```csharp
public object DetailedMetricsEnabled { get; }
```

- *Type:* object

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```csharp
public Apigatewayv2StageDefaultRouteSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---


### Apigatewayv2StageRouteSettingsList <a name="Apigatewayv2StageRouteSettingsList" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageRouteSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get"></a>

```csharp
private Apigatewayv2StageRouteSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Apigatewayv2StageRouteSettingsOutputReference <a name="Apigatewayv2StageRouteSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2StageRouteSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDetailedMetricsEnabled">ResetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetDetailedMetricsEnabled` <a name="ResetDetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```csharp
private void ResetDetailedMetricsEnabled()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabledInput">DetailedMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKeyInput">RouteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKey">RouteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public object DataTraceEnabledInput { get; }
```

- *Type:* object

---

##### `DetailedMetricsEnabledInput`<sup>Optional</sup> <a name="DetailedMetricsEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```csharp
public object DetailedMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKeyInput"></a>

```csharp
public string RouteKeyInput { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public object DataTraceEnabled { get; }
```

- *Type:* object

---

##### `DetailedMetricsEnabled`<sup>Required</sup> <a name="DetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```csharp
public object DetailedMetricsEnabled { get; }
```

- *Type:* object

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKey"></a>

```csharp
public string RouteKey { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



