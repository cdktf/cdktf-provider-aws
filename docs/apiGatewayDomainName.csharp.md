# `apiGatewayDomainName` Submodule <a name="`apiGatewayDomainName` Submodule" id="@cdktf/provider-aws.apiGatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainName <a name="ApiGatewayDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name aws_api_gateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDomainName(Construct Scope, string Id, ApiGatewayDomainNameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication">PutMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody">ResetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey">ResetCertificatePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication">ResetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn">ResetOwnershipVerificationCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn">ResetRegionalCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName">ResetRegionalCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(ApiGatewayDomainNameEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `PutMutualTlsAuthentication` <a name="PutMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication"></a>

```csharp
private void PutMutualTlsAuthentication(ApiGatewayDomainNameMutualTlsAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetCertificateBody` <a name="ResetCertificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody"></a>

```csharp
private void ResetCertificateBody()
```

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain"></a>

```csharp
private void ResetCertificateChain()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetCertificatePrivateKey` <a name="ResetCertificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey"></a>

```csharp
private void ResetCertificatePrivateKey()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMutualTlsAuthentication` <a name="ResetMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication"></a>

```csharp
private void ResetMutualTlsAuthentication()
```

##### `ResetOwnershipVerificationCertificateArn` <a name="ResetOwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn"></a>

```csharp
private void ResetOwnershipVerificationCertificateArn()
```

##### `ResetRegionalCertificateArn` <a name="ResetRegionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn"></a>

```csharp
private void ResetRegionalCertificateArn()
```

##### `ResetRegionalCertificateName` <a name="ResetRegionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName"></a>

```csharp
private void ResetRegionalCertificateName()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDomainName.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDomainName.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDomainName.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate">CertificateUploadDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName">CloudfrontDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId">CloudfrontZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName">RegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId">RegionalZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput">CertificateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput">CertificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput">CertificatePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput">MutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput">OwnershipVerificationCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput">RegionalCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput">RegionalCertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody">CertificateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey">CertificatePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateUploadDate`<sup>Required</sup> <a name="CertificateUploadDate" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate"></a>

```csharp
public string CertificateUploadDate { get; }
```

- *Type:* string

---

##### `CloudfrontDomainName`<sup>Required</sup> <a name="CloudfrontDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName"></a>

```csharp
public string CloudfrontDomainName { get; }
```

- *Type:* string

---

##### `CloudfrontZoneId`<sup>Required</sup> <a name="CloudfrontZoneId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId"></a>

```csharp
public string CloudfrontZoneId { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration"></a>

```csharp
public ApiGatewayDomainNameEndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `MutualTlsAuthentication`<sup>Required</sup> <a name="MutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthenticationOutputReference MutualTlsAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `RegionalDomainName`<sup>Required</sup> <a name="RegionalDomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName"></a>

```csharp
public string RegionalDomainName { get; }
```

- *Type:* string

---

##### `RegionalZoneId`<sup>Required</sup> <a name="RegionalZoneId" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId"></a>

```csharp
public string RegionalZoneId { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `CertificateBodyInput`<sup>Optional</sup> <a name="CertificateBodyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput"></a>

```csharp
public string CertificateBodyInput { get; }
```

- *Type:* string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput"></a>

```csharp
public string CertificateChainInput { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `CertificatePrivateKeyInput`<sup>Optional</sup> <a name="CertificatePrivateKeyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput"></a>

```csharp
public string CertificatePrivateKeyInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput"></a>

```csharp
public ApiGatewayDomainNameEndpointConfiguration EndpointConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MutualTlsAuthenticationInput`<sup>Optional</sup> <a name="MutualTlsAuthenticationInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthentication MutualTlsAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `OwnershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput"></a>

```csharp
public string OwnershipVerificationCertificateArnInput { get; }
```

- *Type:* string

---

##### `RegionalCertificateArnInput`<sup>Optional</sup> <a name="RegionalCertificateArnInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput"></a>

```csharp
public string RegionalCertificateArnInput { get; }
```

- *Type:* string

---

##### `RegionalCertificateNameInput`<sup>Optional</sup> <a name="RegionalCertificateNameInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput"></a>

```csharp
public string RegionalCertificateNameInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `CertificateBody`<sup>Required</sup> <a name="CertificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody"></a>

```csharp
public string CertificateBody { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `CertificatePrivateKey`<sup>Required</sup> <a name="CertificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey"></a>

```csharp
public string CertificatePrivateKey { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnershipVerificationCertificateArn`<sup>Required</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```csharp
public string OwnershipVerificationCertificateArn { get; }
```

- *Type:* string

---

##### `RegionalCertificateArn`<sup>Required</sup> <a name="RegionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn"></a>

```csharp
public string RegionalCertificateArn { get; }
```

- *Type:* string

---

##### `RegionalCertificateName`<sup>Required</sup> <a name="RegionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName"></a>

```csharp
public string RegionalCertificateName { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameConfig <a name="ApiGatewayDomainNameConfig" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDomainNameConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    string CertificateArn = null,
    string CertificateBody = null,
    string CertificateChain = null,
    string CertificateName = null,
    string CertificatePrivateKey = null,
    ApiGatewayDomainNameEndpointConfiguration EndpointConfiguration = null,
    string Id = null,
    ApiGatewayDomainNameMutualTlsAuthentication MutualTlsAuthentication = null,
    string OwnershipVerificationCertificateArn = null,
    string RegionalCertificateArn = null,
    string RegionalCertificateName = null,
    string SecurityPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody">CertificateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain">CertificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey">CertificatePrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}.

---

##### `CertificateBody`<sup>Optional</sup> <a name="CertificateBody" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody"></a>

```csharp
public string CertificateBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}.

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain"></a>

```csharp
public string CertificateChain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}.

---

##### `CertificatePrivateKey`<sup>Optional</sup> <a name="CertificatePrivateKey" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey"></a>

```csharp
public string CertificatePrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration"></a>

```csharp
public ApiGatewayDomainNameEndpointConfiguration EndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#id ApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutualTlsAuthentication`<sup>Optional</sup> <a name="MutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthentication MutualTlsAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}

---

##### `OwnershipVerificationCertificateArn`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn"></a>

```csharp
public string OwnershipVerificationCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}.

---

##### `RegionalCertificateArn`<sup>Optional</sup> <a name="RegionalCertificateArn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn"></a>

```csharp
public string RegionalCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.

---

##### `RegionalCertificateName`<sup>Optional</sup> <a name="RegionalCertificateName" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName"></a>

```csharp
public string RegionalCertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags ApiGatewayDomainName#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}.

---

### ApiGatewayDomainNameEndpointConfiguration <a name="ApiGatewayDomainNameEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDomainNameEndpointConfiguration {
    string[] Types
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types">Types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#types ApiGatewayDomainName#types}. |

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#types ApiGatewayDomainName#types}.

---

### ApiGatewayDomainNameMutualTlsAuthentication <a name="ApiGatewayDomainNameMutualTlsAuthentication" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDomainNameMutualTlsAuthentication {
    string TruststoreUri,
    string TruststoreVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion">TruststoreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}. |

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}.

---

##### `TruststoreVersion`<sup>Optional</sup> <a name="TruststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```csharp
public string TruststoreVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDomainNameEndpointConfigurationOutputReference <a name="ApiGatewayDomainNameEndpointConfigurationOutputReference" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDomainNameEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayDomainNameEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---


### ApiGatewayDomainNameMutualTlsAuthenticationOutputReference <a name="ApiGatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">ResetTruststoreVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTruststoreVersion` <a name="ResetTruststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```csharp
private void ResetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">TruststoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">TruststoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">TruststoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TruststoreUriInput`<sup>Optional</sup> <a name="TruststoreUriInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```csharp
public string TruststoreUriInput { get; }
```

- *Type:* string

---

##### `TruststoreVersionInput`<sup>Optional</sup> <a name="TruststoreVersionInput" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```csharp
public string TruststoreVersionInput { get; }
```

- *Type:* string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; }
```

- *Type:* string

---

##### `TruststoreVersion`<sup>Required</sup> <a name="TruststoreVersion" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```csharp
public string TruststoreVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---



