# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktf/provider-aws.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route aws_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2Route(Construct Scope, string Id, Apigatewayv2RouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig">Apigatewayv2RouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter">PutRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">ResetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter">ResetRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">ResetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRequestParameter` <a name="PutRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter"></a>

```csharp
private void PutRequestParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```csharp
private void ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```csharp
private void ResetAuthorizationScopes()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```csharp
private void ResetAuthorizerId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModelSelectionExpression` <a name="ResetModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```csharp
private void ResetModelSelectionExpression()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```csharp
private void ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```csharp
private void ResetRequestModels()
```

##### `ResetRequestParameter` <a name="ResetRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter"></a>

```csharp
private void ResetRequestParameter()
```

##### `ResetRouteResponseSelectionExpression` <a name="ResetRouteResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```csharp
private void ResetRouteResponseSelectionExpression()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```csharp
private void ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2Route.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2Route.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2Route.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter">RequestParameter</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">ModelSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">OperationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">RequestModelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput">RequestParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">RouteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">RouteResponseSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels">RequestModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey">RouteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">RouteResponseSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RequestParameter`<sup>Required</sup> <a name="RequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter"></a>

```csharp
public Apigatewayv2RouteRequestParameterList RequestParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```csharp
public object ApiKeyRequiredInput { get; }
```

- *Type:* object

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```csharp
public string[] AuthorizationScopesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```csharp
public string AuthorizerIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModelSelectionExpressionInput`<sup>Optional</sup> <a name="ModelSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```csharp
public string ModelSelectionExpressionInput { get; }
```

- *Type:* string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```csharp
public string OperationNameInput { get; }
```

- *Type:* string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestParameterInput`<sup>Optional</sup> <a name="RequestParameterInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput"></a>

```csharp
public object RequestParameterInput { get; }
```

- *Type:* object

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```csharp
public string RouteKeyInput { get; }
```

- *Type:* string

---

##### `RouteResponseSelectionExpressionInput`<sup>Optional</sup> <a name="RouteResponseSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```csharp
public string RouteResponseSelectionExpressionInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```csharp
public object ApiKeyRequired { get; }
```

- *Type:* object

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; }
```

- *Type:* string[]

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelSelectionExpression`<sup>Required</sup> <a name="ModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```csharp
public string RouteKey { get; }
```

- *Type:* string

---

##### `RouteResponseSelectionExpression`<sup>Required</sup> <a name="RouteResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```csharp
public string RouteResponseSelectionExpression { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2RouteConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiId,
    string RouteKey,
    object ApiKeyRequired = null,
    string[] AuthorizationScopes = null,
    string AuthorizationType = null,
    string AuthorizerId = null,
    string Id = null,
    string ModelSelectionExpression = null,
    string OperationName = null,
    System.Collections.Generic.IDictionary<string, string> RequestModels = null,
    object RequestParameter = null,
    string RouteResponseSelectionExpression = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">RouteKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">ModelSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">OperationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">RequestModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter">RequestParameter</a></code> | <code>object</code> | request_parameter block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">RouteResponseSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```csharp
public string RouteKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```csharp
public object ApiKeyRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModelSelectionExpression`<sup>Optional</sup> <a name="ModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```csharp
public string ModelSelectionExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```csharp
public string OperationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `RequestParameter`<sup>Optional</sup> <a name="RequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter"></a>

```csharp
public object RequestParameter { get; set; }
```

- *Type:* object

request_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `RouteResponseSelectionExpression`<sup>Optional</sup> <a name="RouteResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```csharp
public string RouteResponseSelectionExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}.

---

### Apigatewayv2RouteRequestParameter <a name="Apigatewayv2RouteRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2RouteRequestParameter {
    string RequestParameterKey,
    object Required
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey">RequestParameterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required">Required</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}. |

---

##### `RequestParameterKey`<sup>Required</sup> <a name="RequestParameterKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey"></a>

```csharp
public string RequestParameterKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteRequestParameterList <a name="Apigatewayv2RouteRequestParameterList" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2RouteRequestParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get"></a>

```csharp
private Apigatewayv2RouteRequestParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Apigatewayv2RouteRequestParameterOutputReference <a name="Apigatewayv2RouteRequestParameterOutputReference" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2RouteRequestParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput">RequestParameterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey">RequestParameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestParameterKeyInput`<sup>Optional</sup> <a name="RequestParameterKeyInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput"></a>

```csharp
public string RequestParameterKeyInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `RequestParameterKey`<sup>Required</sup> <a name="RequestParameterKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey"></a>

```csharp
public string RequestParameterKey { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



