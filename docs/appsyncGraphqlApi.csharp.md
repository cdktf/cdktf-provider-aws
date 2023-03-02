# `appsyncGraphqlApi` Submodule <a name="`appsyncGraphqlApi` Submodule" id="@cdktf/provider-aws.appsyncGraphqlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphqlApi <a name="AppsyncGraphqlApi" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api aws_appsync_graphql_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApi(Construct Scope, string Id, AppsyncGraphqlApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig">AppsyncGraphqlApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig">AppsyncGraphqlApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider">PutAdditionalAuthenticationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig">PutOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig">PutUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider">ResetAdditionalAuthenticationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig">ResetOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig">ResetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled">ResetXrayEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdditionalAuthenticationProvider` <a name="PutAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider"></a>

```csharp
private void PutAdditionalAuthenticationProvider(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider.parameter.value"></a>

- *Type:* object

---

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig"></a>

```csharp
private void PutLambdaAuthorizerConfig(AppsyncGraphqlApiLambdaAuthorizerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig"></a>

```csharp
private void PutLogConfig(AppsyncGraphqlApiLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `PutOpenidConnectConfig` <a name="PutOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig"></a>

```csharp
private void PutOpenidConnectConfig(AppsyncGraphqlApiOpenidConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `PutUserPoolConfig` <a name="PutUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig"></a>

```csharp
private void PutUserPoolConfig(AppsyncGraphqlApiUserPoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `ResetAdditionalAuthenticationProvider` <a name="ResetAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider"></a>

```csharp
private void ResetAdditionalAuthenticationProvider()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig"></a>

```csharp
private void ResetLambdaAuthorizerConfig()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetOpenidConnectConfig` <a name="ResetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig"></a>

```csharp
private void ResetOpenidConnectConfig()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUserPoolConfig` <a name="ResetUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig"></a>

```csharp
private void ResetUserPoolConfig()
```

##### `ResetXrayEnabled` <a name="ResetXrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled"></a>

```csharp
private void ResetXrayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncGraphqlApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncGraphqlApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncGraphqlApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider">AdditionalAuthenticationProvider</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig">OpenidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris">Uris</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput">AdditionalAuthenticationProviderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput">OpenidConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput">UserPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput">XrayEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled">XrayEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalAuthenticationProvider`<sup>Required</sup> <a name="AdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderList AdditionalAuthenticationProvider { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference LambdaAuthorizerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig"></a>

```csharp
public AppsyncGraphqlApiLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a>

---

##### `OpenidConnectConfig`<sup>Required</sup> <a name="OpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig"></a>

```csharp
public AppsyncGraphqlApiOpenidConnectConfigOutputReference OpenidConnectConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a>

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris"></a>

```csharp
public StringMap Uris { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig"></a>

```csharp
public AppsyncGraphqlApiUserPoolConfigOutputReference UserPoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a>

---

##### `AdditionalAuthenticationProviderInput`<sup>Optional</sup> <a name="AdditionalAuthenticationProviderInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput"></a>

```csharp
public object AdditionalAuthenticationProviderInput { get; }
```

- *Type:* object

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput"></a>

```csharp
public AppsyncGraphqlApiLambdaAuthorizerConfig LambdaAuthorizerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput"></a>

```csharp
public AppsyncGraphqlApiLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpenidConnectConfigInput`<sup>Optional</sup> <a name="OpenidConnectConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput"></a>

```csharp
public AppsyncGraphqlApiOpenidConnectConfig OpenidConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserPoolConfigInput`<sup>Optional</sup> <a name="UserPoolConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput"></a>

```csharp
public AppsyncGraphqlApiUserPoolConfig UserPoolConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `XrayEnabledInput`<sup>Optional</sup> <a name="XrayEnabledInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput"></a>

```csharp
public object XrayEnabledInput { get; }
```

- *Type:* object

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `XrayEnabled`<sup>Required</sup> <a name="XrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled"></a>

```csharp
public object XrayEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProvider <a name="AppsyncGraphqlApiAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProvider {
    string AuthenticationType,
    AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig LambdaAuthorizerConfig = null,
    AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig OpenidConnectConfig = null,
    AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig UserPoolConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig">OpenidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | user_pool_config block. |

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig LambdaAuthorizerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `OpenidConnectConfig`<sup>Optional</sup> <a name="OpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig OpenidConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `UserPoolConfig`<sup>Optional</sup> <a name="UserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig UserPoolConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig {
    string AuthorizerUri,
    double AuthorizerResultTtlInSeconds = null,
    string IdentityValidationExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
    string Issuer,
    double AuthTtl = null,
    string ClientId = null,
    double IatTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl">AuthTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl">IatTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl"></a>

```csharp
public double AuthTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl"></a>

```csharp
public double IatTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
    string UserPoolId,
    string AppIdClientRegex = null,
    string AwsRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

### AppsyncGraphqlApiConfig <a name="AppsyncGraphqlApiConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthenticationType,
    string Name,
    object AdditionalAuthenticationProvider = null,
    string Id = null,
    AppsyncGraphqlApiLambdaAuthorizerConfig LambdaAuthorizerConfig = null,
    AppsyncGraphqlApiLogConfig LogConfig = null,
    AppsyncGraphqlApiOpenidConnectConfig OpenidConnectConfig = null,
    string Schema = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    AppsyncGraphqlApiUserPoolConfig UserPoolConfig = null,
    object XrayEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider">AdditionalAuthenticationProvider</a></code> | <code>object</code> | additional_authentication_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig">OpenidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | user_pool_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled">XrayEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}.

---

##### `AdditionalAuthenticationProvider`<sup>Optional</sup> <a name="AdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider"></a>

```csharp
public object AdditionalAuthenticationProvider { get; set; }
```

- *Type:* object

additional_authentication_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphqlApiLambdaAuthorizerConfig LambdaAuthorizerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig"></a>

```csharp
public AppsyncGraphqlApiLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}

---

##### `OpenidConnectConfig`<sup>Optional</sup> <a name="OpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig"></a>

```csharp
public AppsyncGraphqlApiOpenidConnectConfig OpenidConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}.

---

##### `UserPoolConfig`<sup>Optional</sup> <a name="UserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig"></a>

```csharp
public AppsyncGraphqlApiUserPoolConfig UserPoolConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

##### `XrayEnabled`<sup>Optional</sup> <a name="XrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled"></a>

```csharp
public object XrayEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}.

---

### AppsyncGraphqlApiLambdaAuthorizerConfig <a name="AppsyncGraphqlApiLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiLambdaAuthorizerConfig {
    string AuthorizerUri,
    double AuthorizerResultTtlInSeconds = null,
    string IdentityValidationExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiLogConfig <a name="AppsyncGraphqlApiLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiLogConfig {
    string CloudwatchLogsRoleArn,
    string FieldLogLevel,
    object ExcludeVerboseContent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel">FieldLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}. |

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```csharp
public string CloudwatchLogsRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}.

---

##### `FieldLogLevel`<sup>Required</sup> <a name="FieldLogLevel" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel"></a>

```csharp
public string FieldLogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}.

---

##### `ExcludeVerboseContent`<sup>Optional</sup> <a name="ExcludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent"></a>

```csharp
public object ExcludeVerboseContent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}.

---

### AppsyncGraphqlApiOpenidConnectConfig <a name="AppsyncGraphqlApiOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiOpenidConnectConfig {
    string Issuer,
    double AuthTtl = null,
    string ClientId = null,
    double IatTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl">AuthTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl">IatTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl"></a>

```csharp
public double AuthTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl"></a>

```csharp
public double IatTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiUserPoolConfig <a name="AppsyncGraphqlApiUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiUserPoolConfig {
    string DefaultAction,
    string UserPoolId,
    string AppIdClientRegex = null,
    string AwsRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```csharp
private void ResetAuthorizerResultTtlInSeconds()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```csharp
private void ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```csharp
public double AuthorizerResultTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```csharp
public string AuthorizerUriInput { get; }
```

- *Type:* string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```csharp
public string IdentityValidationExpressionInput { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; }
```

- *Type:* double

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; }
```

- *Type:* string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderList <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderList" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get"></a>

```csharp
private AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```csharp
private void ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl"></a>

```csharp
private void ResetIatTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```csharp
public double AuthTtlInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```csharp
public double IatTtlInput { get; }
```

- *Type:* double

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl"></a>

```csharp
public double AuthTtl { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl"></a>

```csharp
public double IatTtl { get; }
```

- *Type:* double

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig">PutOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig">PutUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig">ResetOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig">ResetUserPoolConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig"></a>

```csharp
private void PutLambdaAuthorizerConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `PutOpenidConnectConfig` <a name="PutOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig"></a>

```csharp
private void PutOpenidConnectConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `PutUserPoolConfig` <a name="PutUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig"></a>

```csharp
private void PutUserPoolConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig"></a>

```csharp
private void ResetLambdaAuthorizerConfig()
```

##### `ResetOpenidConnectConfig` <a name="ResetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig"></a>

```csharp
private void ResetOpenidConnectConfig()
```

##### `ResetUserPoolConfig` <a name="ResetUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig"></a>

```csharp
private void ResetUserPoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig">OpenidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput">OpenidConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput">UserPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference LambdaAuthorizerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a>

---

##### `OpenidConnectConfig`<sup>Required</sup> <a name="OpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference OpenidConnectConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference UserPoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig LambdaAuthorizerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `OpenidConnectConfigInput`<sup>Optional</sup> <a name="OpenidConnectConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig OpenidConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `UserPoolConfigInput`<sup>Optional</sup> <a name="UserPoolConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig UserPoolConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```csharp
private void ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```csharp
public string AppIdClientRegexInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---


### AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```csharp
private void ResetAuthorizerResultTtlInSeconds()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```csharp
private void ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```csharp
public double AuthorizerResultTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```csharp
public string AuthorizerUriInput { get; }
```

- *Type:* string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```csharp
public string IdentityValidationExpressionInput { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; }
```

- *Type:* double

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; }
```

- *Type:* string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiLambdaAuthorizerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiLogConfigOutputReference <a name="AppsyncGraphqlApiLogConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent">ResetExcludeVerboseContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeVerboseContent` <a name="ResetExcludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```csharp
private void ResetExcludeVerboseContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">CloudwatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput">ExcludeVerboseContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput">FieldLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel">FieldLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudwatchLogsRoleArnInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```csharp
public string CloudwatchLogsRoleArnInput { get; }
```

- *Type:* string

---

##### `ExcludeVerboseContentInput`<sup>Optional</sup> <a name="ExcludeVerboseContentInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```csharp
public object ExcludeVerboseContentInput { get; }
```

- *Type:* object

---

##### `FieldLogLevelInput`<sup>Optional</sup> <a name="FieldLogLevelInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```csharp
public string FieldLogLevelInput { get; }
```

- *Type:* string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```csharp
public string CloudwatchLogsRoleArn { get; }
```

- *Type:* string

---

##### `ExcludeVerboseContent`<sup>Required</sup> <a name="ExcludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```csharp
public object ExcludeVerboseContent { get; }
```

- *Type:* object

---

##### `FieldLogLevel`<sup>Required</sup> <a name="FieldLogLevel" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```csharp
public string FieldLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---


### AppsyncGraphqlApiOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiOpenidConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```csharp
private void ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl"></a>

```csharp
private void ResetIatTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```csharp
public double AuthTtlInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```csharp
public double IatTtlInput { get; }
```

- *Type:* double

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl"></a>

```csharp
public double AuthTtl { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl"></a>

```csharp
public double IatTtl { get; }
```

- *Type:* double

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiOpenidConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---


### AppsyncGraphqlApiUserPoolConfigOutputReference <a name="AppsyncGraphqlApiUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncGraphqlApiUserPoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```csharp
private void ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```csharp
public string AppIdClientRegexInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncGraphqlApiUserPoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---



