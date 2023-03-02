# `apigatewayv2RouteResponse` Submodule <a name="`apigatewayv2RouteResponse` Submodule" id="@cdktf/provider-aws.apigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RouteResponse <a name="Apigatewayv2RouteResponse" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response aws_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2RouteResponse(Construct Scope, string Id, Apigatewayv2RouteResponseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression">ResetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels">ResetResponseModels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModelSelectionExpression` <a name="ResetModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression"></a>

```csharp
private void ResetModelSelectionExpression()
```

##### `ResetResponseModels` <a name="ResetResponseModels" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels"></a>

```csharp
private void ResetResponseModels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2RouteResponse.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2RouteResponse.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2RouteResponse.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput">ModelSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput">ResponseModelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput">RouteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput">RouteResponseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels">ResponseModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId">RouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey">RouteResponseKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModelSelectionExpressionInput`<sup>Optional</sup> <a name="ModelSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput"></a>

```csharp
public string ModelSelectionExpressionInput { get; }
```

- *Type:* string

---

##### `ResponseModelsInput`<sup>Optional</sup> <a name="ResponseModelsInput" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseModelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RouteIdInput`<sup>Optional</sup> <a name="RouteIdInput" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput"></a>

```csharp
public string RouteIdInput { get; }
```

- *Type:* string

---

##### `RouteResponseKeyInput`<sup>Optional</sup> <a name="RouteResponseKeyInput" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput"></a>

```csharp
public string RouteResponseKeyInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelSelectionExpression`<sup>Required</sup> <a name="ModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; }
```

- *Type:* string

---

##### `ResponseModels`<sup>Required</sup> <a name="ResponseModels" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseModels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId"></a>

```csharp
public string RouteId { get; }
```

- *Type:* string

---

##### `RouteResponseKey`<sup>Required</sup> <a name="RouteResponseKey" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey"></a>

```csharp
public string RouteResponseKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteResponseConfig <a name="Apigatewayv2RouteResponseConfig" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2RouteResponseConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiId,
    string RouteId,
    string RouteResponseKey,
    string Id = null,
    string ModelSelectionExpression = null,
    System.Collections.Generic.IDictionary<string, string> ResponseModels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId">RouteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey">RouteResponseKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels">ResponseModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}.

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId"></a>

```csharp
public string RouteId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}.

---

##### `RouteResponseKey`<sup>Required</sup> <a name="RouteResponseKey" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey"></a>

```csharp
public string RouteResponseKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModelSelectionExpression`<sup>Optional</sup> <a name="ModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}.

---

##### `ResponseModels`<sup>Optional</sup> <a name="ResponseModels" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseModels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}.

---



