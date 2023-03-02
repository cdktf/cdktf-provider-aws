# `apigatewayv2DomainName` Submodule <a name="`apigatewayv2DomainName` Submodule" id="@cdktf/provider-aws.apigatewayv2DomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2DomainName <a name="Apigatewayv2DomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name aws_apigatewayv2_domain_name}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainName(Construct Scope, string Id, Apigatewayv2DomainNameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig">Apigatewayv2DomainNameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig">Apigatewayv2DomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration">PutDomainNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication">PutMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication">ResetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDomainNameConfiguration` <a name="PutDomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration"></a>

```csharp
private void PutDomainNameConfiguration(Apigatewayv2DomainNameDomainNameConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---

##### `PutMutualTlsAuthentication` <a name="PutMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication"></a>

```csharp
private void PutMutualTlsAuthentication(Apigatewayv2DomainNameMutualTlsAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts"></a>

```csharp
private void PutTimeouts(Apigatewayv2DomainNameTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMutualTlsAuthentication` <a name="ResetMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication"></a>

```csharp
private void ResetMutualTlsAuthentication()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2DomainName.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2DomainName.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Apigatewayv2DomainName.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.apiMappingSelectionExpression">ApiMappingSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfiguration">DomainNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference">Apigatewayv2DomainNameDomainNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference">Apigatewayv2DomainNameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationInput">DomainNameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput">MutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiMappingSelectionExpression`<sup>Required</sup> <a name="ApiMappingSelectionExpression" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.apiMappingSelectionExpression"></a>

```csharp
public string ApiMappingSelectionExpression { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DomainNameConfiguration`<sup>Required</sup> <a name="DomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfiguration"></a>

```csharp
public Apigatewayv2DomainNameDomainNameConfigurationOutputReference DomainNameConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference">Apigatewayv2DomainNameDomainNameConfigurationOutputReference</a>

---

##### `MutualTlsAuthentication`<sup>Required</sup> <a name="MutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication"></a>

```csharp
public Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference MutualTlsAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeouts"></a>

```csharp
public Apigatewayv2DomainNameTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference">Apigatewayv2DomainNameTimeoutsOutputReference</a>

---

##### `DomainNameConfigurationInput`<sup>Optional</sup> <a name="DomainNameConfigurationInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationInput"></a>

```csharp
public Apigatewayv2DomainNameDomainNameConfiguration DomainNameConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MutualTlsAuthenticationInput`<sup>Optional</sup> <a name="MutualTlsAuthenticationInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput"></a>

```csharp
public Apigatewayv2DomainNameMutualTlsAuthentication MutualTlsAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2DomainNameConfig <a name="Apigatewayv2DomainNameConfig" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    Apigatewayv2DomainNameDomainNameConfiguration DomainNameConfiguration,
    string Id = null,
    Apigatewayv2DomainNameMutualTlsAuthentication MutualTlsAuthentication = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Apigatewayv2DomainNameTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfiguration">DomainNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | domain_name_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}.

---

##### `DomainNameConfiguration`<sup>Required</sup> <a name="DomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfiguration"></a>

```csharp
public Apigatewayv2DomainNameDomainNameConfiguration DomainNameConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

domain_name_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutualTlsAuthentication`<sup>Optional</sup> <a name="MutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication"></a>

```csharp
public Apigatewayv2DomainNameMutualTlsAuthentication MutualTlsAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.timeouts"></a>

```csharp
public Apigatewayv2DomainNameTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#timeouts Apigatewayv2DomainName#timeouts}

---

### Apigatewayv2DomainNameDomainNameConfiguration <a name="Apigatewayv2DomainNameDomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameDomainNameConfiguration {
    string CertificateArn,
    string EndpointType,
    string SecurityPolicy,
    string OwnershipVerificationCertificateArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}. |

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}.

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}.

---

##### `OwnershipVerificationCertificateArn`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.ownershipVerificationCertificateArn"></a>

```csharp
public string OwnershipVerificationCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}.

---

### Apigatewayv2DomainNameMutualTlsAuthentication <a name="Apigatewayv2DomainNameMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameMutualTlsAuthentication {
    string TruststoreUri,
    string TruststoreVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion">TruststoreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}. |

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}.

---

##### `TruststoreVersion`<sup>Optional</sup> <a name="TruststoreVersion" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```csharp
public string TruststoreVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}.

---

### Apigatewayv2DomainNameTimeouts <a name="Apigatewayv2DomainNameTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2DomainNameDomainNameConfigurationOutputReference <a name="Apigatewayv2DomainNameDomainNameConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameDomainNameConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resetOwnershipVerificationCertificateArn">ResetOwnershipVerificationCertificateArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOwnershipVerificationCertificateArn` <a name="ResetOwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resetOwnershipVerificationCertificateArn"></a>

```csharp
private void ResetOwnershipVerificationCertificateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.targetDomainName">TargetDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArnInput">OwnershipVerificationCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.targetDomainName"></a>

```csharp
public string TargetDomainName { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `OwnershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArnInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArnInput"></a>

```csharp
public string OwnershipVerificationCertificateArnInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `OwnershipVerificationCertificateArn`<sup>Required</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArn"></a>

```csharp
public string OwnershipVerificationCertificateArn { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.internalValue"></a>

```csharp
public Apigatewayv2DomainNameDomainNameConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---


### Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference <a name="Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">ResetTruststoreVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTruststoreVersion` <a name="ResetTruststoreVersion" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```csharp
private void ResetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">TruststoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">TruststoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">TruststoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TruststoreUriInput`<sup>Optional</sup> <a name="TruststoreUriInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```csharp
public string TruststoreUriInput { get; }
```

- *Type:* string

---

##### `TruststoreVersionInput`<sup>Optional</sup> <a name="TruststoreVersionInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```csharp
public string TruststoreVersionInput { get; }
```

- *Type:* string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; }
```

- *Type:* string

---

##### `TruststoreVersion`<sup>Required</sup> <a name="TruststoreVersion" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```csharp
public string TruststoreVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```csharp
public Apigatewayv2DomainNameMutualTlsAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---


### Apigatewayv2DomainNameTimeoutsOutputReference <a name="Apigatewayv2DomainNameTimeoutsOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Apigatewayv2DomainNameTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



