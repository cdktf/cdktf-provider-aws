# `apiGatewayMethod` Submodule <a name="`apiGatewayMethod` Submodule" id="@cdktf/provider-aws.apiGatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethod <a name="ApiGatewayMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method aws_api_gateway_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayMethod(Construct Scope, string Id, ApiGatewayMethodConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId">ResetRequestValidatorId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired"></a>

```csharp
private void ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes"></a>

```csharp
private void ResetAuthorizationScopes()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId"></a>

```csharp
private void ResetAuthorizerId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName"></a>

```csharp
private void ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels"></a>

```csharp
private void ResetRequestModels()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters"></a>

```csharp
private void ResetRequestParameters()
```

##### `ResetRequestValidatorId` <a name="ResetRequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId"></a>

```csharp
private void ResetRequestValidatorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayMethod.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayMethod.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayMethod.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput">OperationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput">RequestModelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput">RequestParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput">RequestValidatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels">RequestModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId">RequestValidatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput"></a>

```csharp
public object ApiKeyRequiredInput { get; }
```

- *Type:* object

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput"></a>

```csharp
public string[] AuthorizationScopesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput"></a>

```csharp
public string AuthorizerIdInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput"></a>

```csharp
public string OperationNameInput { get; }
```

- *Type:* string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RequestParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RequestValidatorIdInput`<sup>Optional</sup> <a name="RequestValidatorIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput"></a>

```csharp
public string RequestValidatorIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired"></a>

```csharp
public object ApiKeyRequired { get; }
```

- *Type:* object

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; }
```

- *Type:* string[]

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RequestParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `RequestValidatorId`<sup>Required</sup> <a name="RequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId"></a>

```csharp
public string RequestValidatorId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodConfig <a name="ApiGatewayMethodConfig" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayMethodConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Authorization,
    string HttpMethod,
    string ResourceId,
    string RestApiId,
    object ApiKeyRequired = null,
    string[] AuthorizationScopes = null,
    string AuthorizerId = null,
    string Id = null,
    string OperationName = null,
    System.Collections.Generic.IDictionary<string, string> RequestModels = null,
    System.Collections.Generic.IDictionary<string, object> RequestParameters = null,
    string RequestValidatorId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName">OperationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels">RequestModels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId">RequestValidatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}.

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}.

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired"></a>

```csharp
public object ApiKeyRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}.

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes"></a>

```csharp
public string[] AuthorizationScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName"></a>

```csharp
public string OperationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}.

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestModels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RequestParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}.

---

##### `RequestValidatorId`<sup>Optional</sup> <a name="RequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId"></a>

```csharp
public string RequestValidatorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}.

---



