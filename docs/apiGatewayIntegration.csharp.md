# `apiGatewayIntegration` Submodule <a name="`apiGatewayIntegration` Submodule" id="@cdktf/provider-aws.apiGatewayIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegration <a name="ApiGatewayIntegration" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration aws_api_gateway_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayIntegration(Construct Scope, string Id, ApiGatewayIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig">ApiGatewayIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig">ApiGatewayIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters">ResetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace">ResetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling">ResetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod">ResetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior">ResetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates">ResetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds">ResetTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig"></a>

```csharp
private void PutTlsConfig(ApiGatewayIntegrationTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `ResetCacheKeyParameters` <a name="ResetCacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters"></a>

```csharp
private void ResetCacheKeyParameters()
```

##### `ResetCacheNamespace` <a name="ResetCacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace"></a>

```csharp
private void ResetCacheNamespace()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetContentHandling` <a name="ResetContentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling"></a>

```csharp
private void ResetContentHandling()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationHttpMethod` <a name="ResetIntegrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod"></a>

```csharp
private void ResetIntegrationHttpMethod()
```

##### `ResetPassthroughBehavior` <a name="ResetPassthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior"></a>

```csharp
private void ResetPassthroughBehavior()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters"></a>

```csharp
private void ResetRequestParameters()
```

##### `ResetRequestTemplates` <a name="ResetRequestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates"></a>

```csharp
private void ResetRequestTemplates()
```

##### `ResetTimeoutMilliseconds` <a name="ResetTimeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds"></a>

```csharp
private void ResetTimeoutMilliseconds()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri"></a>

```csharp
private void ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput">CacheKeyParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput">CacheNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput">ContentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput">IntegrationHttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput">PassthroughBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput">RequestParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput">RequestTemplatesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput">TimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters">CacheKeyParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace">CacheNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling">ContentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod">IntegrationHttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates">RequestTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds">TimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri">Uri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig"></a>

```csharp
public ApiGatewayIntegrationTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a>

---

##### `CacheKeyParametersInput`<sup>Optional</sup> <a name="CacheKeyParametersInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput"></a>

```csharp
public string[] CacheKeyParametersInput { get; }
```

- *Type:* string[]

---

##### `CacheNamespaceInput`<sup>Optional</sup> <a name="CacheNamespaceInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput"></a>

```csharp
public string CacheNamespaceInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `ContentHandlingInput`<sup>Optional</sup> <a name="ContentHandlingInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput"></a>

```csharp
public string ContentHandlingInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationHttpMethodInput`<sup>Optional</sup> <a name="IntegrationHttpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput"></a>

```csharp
public string IntegrationHttpMethodInput { get; }
```

- *Type:* string

---

##### `PassthroughBehaviorInput`<sup>Optional</sup> <a name="PassthroughBehaviorInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput"></a>

```csharp
public string PassthroughBehaviorInput { get; }
```

- *Type:* string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTemplatesInput`<sup>Optional</sup> <a name="RequestTemplatesInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestTemplatesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `TimeoutMillisecondsInput`<sup>Optional</sup> <a name="TimeoutMillisecondsInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput"></a>

```csharp
public double TimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput"></a>

```csharp
public ApiGatewayIntegrationTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `CacheKeyParameters`<sup>Required</sup> <a name="CacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters"></a>

```csharp
public string[] CacheKeyParameters { get; }
```

- *Type:* string[]

---

##### `CacheNamespace`<sup>Required</sup> <a name="CacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace"></a>

```csharp
public string CacheNamespace { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `ContentHandling`<sup>Required</sup> <a name="ContentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling"></a>

```csharp
public string ContentHandling { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationHttpMethod`<sup>Required</sup> <a name="IntegrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod"></a>

```csharp
public string IntegrationHttpMethod { get; }
```

- *Type:* string

---

##### `PassthroughBehavior`<sup>Required</sup> <a name="PassthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior"></a>

```csharp
public string PassthroughBehavior { get; }
```

- *Type:* string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTemplates`<sup>Required</sup> <a name="RequestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestTemplates { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `TimeoutMilliseconds`<sup>Required</sup> <a name="TimeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds"></a>

```csharp
public double TimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationConfig <a name="ApiGatewayIntegrationConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayIntegrationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HttpMethod,
    string ResourceId,
    string RestApiId,
    string Type,
    string[] CacheKeyParameters = null,
    string CacheNamespace = null,
    string ConnectionId = null,
    string ConnectionType = null,
    string ContentHandling = null,
    string Credentials = null,
    string Id = null,
    string IntegrationHttpMethod = null,
    string PassthroughBehavior = null,
    System.Collections.Generic.IDictionary<string, string> RequestParameters = null,
    System.Collections.Generic.IDictionary<string, string> RequestTemplates = null,
    double TimeoutMilliseconds = null,
    ApiGatewayIntegrationTlsConfig TlsConfig = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters">CacheKeyParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace">CacheNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling">ContentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod">IntegrationHttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters">RequestParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates">RequestTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds">TimeoutMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}.

---

##### `CacheKeyParameters`<sup>Optional</sup> <a name="CacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters"></a>

```csharp
public string[] CacheKeyParameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.

---

##### `CacheNamespace`<sup>Optional</sup> <a name="CacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace"></a>

```csharp
public string CacheNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}.

---

##### `ContentHandling`<sup>Optional</sup> <a name="ContentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling"></a>

```csharp
public string ContentHandling { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationHttpMethod`<sup>Optional</sup> <a name="IntegrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod"></a>

```csharp
public string IntegrationHttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}.

---

##### `PassthroughBehavior`<sup>Optional</sup> <a name="PassthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior"></a>

```csharp
public string PassthroughBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}.

---

##### `RequestTemplates`<sup>Optional</sup> <a name="RequestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestTemplates { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}.

---

##### `TimeoutMilliseconds`<sup>Optional</sup> <a name="TimeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds"></a>

```csharp
public double TimeoutMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig"></a>

```csharp
public ApiGatewayIntegrationTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}.

---

### ApiGatewayIntegrationTlsConfig <a name="ApiGatewayIntegrationTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayIntegrationTlsConfig {
    object InsecureSkipVerification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification">InsecureSkipVerification</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}. |

---

##### `InsecureSkipVerification`<sup>Optional</sup> <a name="InsecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification"></a>

```csharp
public object InsecureSkipVerification { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayIntegrationTlsConfigOutputReference <a name="ApiGatewayIntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayIntegrationTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification">ResetInsecureSkipVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInsecureSkipVerification` <a name="ResetInsecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification"></a>

```csharp
private void ResetInsecureSkipVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput">InsecureSkipVerificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification">InsecureSkipVerification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsecureSkipVerificationInput`<sup>Optional</sup> <a name="InsecureSkipVerificationInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput"></a>

```csharp
public object InsecureSkipVerificationInput { get; }
```

- *Type:* object

---

##### `InsecureSkipVerification`<sup>Required</sup> <a name="InsecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification"></a>

```csharp
public object InsecureSkipVerification { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayIntegrationTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---



