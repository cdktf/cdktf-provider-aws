# `apiGatewayMethodSettings` Submodule <a name="`apiGatewayMethodSettings` Submodule" id="@cdktf/provider-aws.apiGatewayMethodSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethodSettings <a name="ApiGatewayMethodSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings aws_api_gateway_method_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayMethodSettings(Construct Scope, string Id, ApiGatewayMethodSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig">ApiGatewayMethodSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig">ApiGatewayMethodSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings"></a>

```csharp
private void PutSettings(ApiGatewayMethodSettingsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayMethodSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayMethodSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayMethodSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput">MethodPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath">MethodPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings"></a>

```csharp
public ApiGatewayMethodSettingsSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MethodPathInput`<sup>Optional</sup> <a name="MethodPathInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput"></a>

```csharp
public string MethodPathInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput"></a>

```csharp
public ApiGatewayMethodSettingsSettings SettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MethodPath`<sup>Required</sup> <a name="MethodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath"></a>

```csharp
public string MethodPath { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodSettingsConfig <a name="ApiGatewayMethodSettingsConfig" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayMethodSettingsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MethodPath,
    string RestApiId,
    ApiGatewayMethodSettingsSettings Settings,
    string StageName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath">MethodPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MethodPath`<sup>Required</sup> <a name="MethodPath" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath"></a>

```csharp
public string MethodPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}.

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings"></a>

```csharp
public ApiGatewayMethodSettingsSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayMethodSettingsSettings <a name="ApiGatewayMethodSettingsSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayMethodSettingsSettings {
    object CacheDataEncrypted = null,
    double CacheTtlInSeconds = null,
    object CachingEnabled = null,
    object DataTraceEnabled = null,
    string LoggingLevel = null,
    object MetricsEnabled = null,
    object RequireAuthorizationForCacheControl = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null,
    string UnauthorizedCacheControlHeaderStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled">CachingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled">MetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl">RequireAuthorizationForCacheControl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy">UnauthorizedCacheControlHeaderStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}. |

---

##### `CacheDataEncrypted`<sup>Optional</sup> <a name="CacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted"></a>

```csharp
public object CacheDataEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}.

---

##### `CacheTtlInSeconds`<sup>Optional</sup> <a name="CacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}.

---

##### `CachingEnabled`<sup>Optional</sup> <a name="CachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled"></a>

```csharp
public object CachingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}.

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled"></a>

```csharp
public object DataTraceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}.

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled"></a>

```csharp
public object MetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}.

---

##### `RequireAuthorizationForCacheControl`<sup>Optional</sup> <a name="RequireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl"></a>

```csharp
public object RequireAuthorizationForCacheControl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}.

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}.

---

##### `UnauthorizedCacheControlHeaderStrategy`<sup>Optional</sup> <a name="UnauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy"></a>

```csharp
public string UnauthorizedCacheControlHeaderStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayMethodSettingsSettingsOutputReference <a name="ApiGatewayMethodSettingsSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayMethodSettingsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted">ResetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds">ResetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled">ResetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl">ResetRequireAuthorizationForCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy">ResetUnauthorizedCacheControlHeaderStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheDataEncrypted` <a name="ResetCacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted"></a>

```csharp
private void ResetCacheDataEncrypted()
```

##### `ResetCacheTtlInSeconds` <a name="ResetCacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds"></a>

```csharp
private void ResetCacheTtlInSeconds()
```

##### `ResetCachingEnabled` <a name="ResetCachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled"></a>

```csharp
private void ResetCachingEnabled()
```

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled"></a>

```csharp
private void ResetMetricsEnabled()
```

##### `ResetRequireAuthorizationForCacheControl` <a name="ResetRequireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl"></a>

```csharp
private void ResetRequireAuthorizationForCacheControl()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```

##### `ResetUnauthorizedCacheControlHeaderStrategy` <a name="ResetUnauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy"></a>

```csharp
private void ResetUnauthorizedCacheControlHeaderStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput">CacheDataEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput">CacheTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput">CachingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput">RequireAuthorizationForCacheControlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput">UnauthorizedCacheControlHeaderStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled">CachingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl">RequireAuthorizationForCacheControl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy">UnauthorizedCacheControlHeaderStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheDataEncryptedInput`<sup>Optional</sup> <a name="CacheDataEncryptedInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```csharp
public object CacheDataEncryptedInput { get; }
```

- *Type:* object

---

##### `CacheTtlInSecondsInput`<sup>Optional</sup> <a name="CacheTtlInSecondsInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```csharp
public double CacheTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `CachingEnabledInput`<sup>Optional</sup> <a name="CachingEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput"></a>

```csharp
public object CachingEnabledInput { get; }
```

- *Type:* object

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public object DataTraceEnabledInput { get; }
```

- *Type:* object

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput"></a>

```csharp
public object MetricsEnabledInput { get; }
```

- *Type:* object

---

##### `RequireAuthorizationForCacheControlInput`<sup>Optional</sup> <a name="RequireAuthorizationForCacheControlInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput"></a>

```csharp
public object RequireAuthorizationForCacheControlInput { get; }
```

- *Type:* object

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `UnauthorizedCacheControlHeaderStrategyInput`<sup>Optional</sup> <a name="UnauthorizedCacheControlHeaderStrategyInput" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput"></a>

```csharp
public string UnauthorizedCacheControlHeaderStrategyInput { get; }
```

- *Type:* string

---

##### `CacheDataEncrypted`<sup>Required</sup> <a name="CacheDataEncrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted"></a>

```csharp
public object CacheDataEncrypted { get; }
```

- *Type:* object

---

##### `CacheTtlInSeconds`<sup>Required</sup> <a name="CacheTtlInSeconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; }
```

- *Type:* double

---

##### `CachingEnabled`<sup>Required</sup> <a name="CachingEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled"></a>

```csharp
public object CachingEnabled { get; }
```

- *Type:* object

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public object DataTraceEnabled { get; }
```

- *Type:* object

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled"></a>

```csharp
public object MetricsEnabled { get; }
```

- *Type:* object

---

##### `RequireAuthorizationForCacheControl`<sup>Required</sup> <a name="RequireAuthorizationForCacheControl" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl"></a>

```csharp
public object RequireAuthorizationForCacheControl { get; }
```

- *Type:* object

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `UnauthorizedCacheControlHeaderStrategy`<sup>Required</sup> <a name="UnauthorizedCacheControlHeaderStrategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy"></a>

```csharp
public string UnauthorizedCacheControlHeaderStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayMethodSettingsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---



