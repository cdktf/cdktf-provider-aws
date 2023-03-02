# `cloudfrontOriginRequestPolicy` Submodule <a name="`cloudfrontOriginRequestPolicy` Submodule" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginRequestPolicy <a name="CloudfrontOriginRequestPolicy" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicy(Construct Scope, string Id, CloudfrontOriginRequestPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig">CloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig">PutCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig">PutHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig">PutQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCookiesConfig` <a name="PutCookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig"></a>

```csharp
private void PutCookiesConfig(CloudfrontOriginRequestPolicyCookiesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---

##### `PutHeadersConfig` <a name="PutHeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig"></a>

```csharp
private void PutHeadersConfig(CloudfrontOriginRequestPolicyHeadersConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---

##### `PutQueryStringsConfig` <a name="PutQueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig"></a>

```csharp
private void PutQueryStringsConfig(CloudfrontOriginRequestPolicyQueryStringsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginRequestPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginRequestPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontOriginRequestPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference">CloudfrontOriginRequestPolicyCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference">CloudfrontOriginRequestPolicyHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfigInput">CookiesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfigInput">HeadersConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfigInput">QueryStringsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfig"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfigOutputReference CookiesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference">CloudfrontOriginRequestPolicyCookiesConfigOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfig"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfigOutputReference HeadersConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference">CloudfrontOriginRequestPolicyHeadersConfigOutputReference</a>

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfig"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference QueryStringsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CookiesConfigInput`<sup>Optional</sup> <a name="CookiesConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfigInput"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfig CookiesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---

##### `HeadersConfigInput`<sup>Optional</sup> <a name="HeadersConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfigInput"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfig HeadersConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryStringsConfigInput`<sup>Optional</sup> <a name="QueryStringsConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfigInput"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfig QueryStringsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginRequestPolicyConfig <a name="CloudfrontOriginRequestPolicyConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CloudfrontOriginRequestPolicyCookiesConfig CookiesConfig,
    CloudfrontOriginRequestPolicyHeadersConfig HeadersConfig,
    string Name,
    CloudfrontOriginRequestPolicyQueryStringsConfig QueryStringsConfig,
    string Comment = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | cookies_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | query_strings_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.cookiesConfig"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfig CookiesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

cookies_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.headersConfig"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfig HeadersConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}.

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.queryStringsConfig"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfig QueryStringsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

query_strings_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontOriginRequestPolicyCookiesConfig <a name="CloudfrontOriginRequestPolicyCookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyCookiesConfig {
    string CookieBehavior,
    CloudfrontOriginRequestPolicyCookiesConfigCookies Cookies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookieBehavior">CookieBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | cookies block. |

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookieBehavior"></a>

```csharp
public string CookieBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}.

---

##### `Cookies`<sup>Optional</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookies"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfigCookies Cookies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}

---

### CloudfrontOriginRequestPolicyCookiesConfigCookies <a name="CloudfrontOriginRequestPolicyCookiesConfigCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyCookiesConfigCookies {
    string[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

### CloudfrontOriginRequestPolicyHeadersConfig <a name="CloudfrontOriginRequestPolicyHeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyHeadersConfig {
    string HeaderBehavior = null,
    CloudfrontOriginRequestPolicyHeadersConfigHeaders Headers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headerBehavior">HeaderBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | headers block. |

---

##### `HeaderBehavior`<sup>Optional</sup> <a name="HeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headerBehavior"></a>

```csharp
public string HeaderBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headers"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfigHeaders Headers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}

---

### CloudfrontOriginRequestPolicyHeadersConfigHeaders <a name="CloudfrontOriginRequestPolicyHeadersConfigHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyHeadersConfigHeaders {
    string[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

### CloudfrontOriginRequestPolicyQueryStringsConfig <a name="CloudfrontOriginRequestPolicyQueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyQueryStringsConfig {
    string QueryStringBehavior,
    CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings QueryStrings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStrings">QueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | query_strings block. |

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStringBehavior"></a>

```csharp
public string QueryStringBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}.

---

##### `QueryStrings`<sup>Optional</sup> <a name="QueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStrings"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings QueryStrings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

query_strings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}

---

### CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings <a name="CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
    string[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference <a name="CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfigCookies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---


### CloudfrontOriginRequestPolicyCookiesConfigOutputReference <a name="CloudfrontOriginRequestPolicyCookiesConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyCookiesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies">PutCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resetCookies">ResetCookies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookies` <a name="PutCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies"></a>

```csharp
private void PutCookies(CloudfrontOriginRequestPolicyCookiesConfigCookies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---

##### `ResetCookies` <a name="ResetCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resetCookies"></a>

```csharp
private void ResetCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies">Cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference">CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehaviorInput">CookieBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookiesInput">CookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior">CookieBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference Cookies { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference">CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference</a>

---

##### `CookieBehaviorInput`<sup>Optional</sup> <a name="CookieBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehaviorInput"></a>

```csharp
public string CookieBehaviorInput { get; }
```

- *Type:* string

---

##### `CookiesInput`<sup>Optional</sup> <a name="CookiesInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookiesInput"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfigCookies CookiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior"></a>

```csharp
public string CookieBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontOriginRequestPolicyCookiesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---


### CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference <a name="CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfigHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---


### CloudfrontOriginRequestPolicyHeadersConfigOutputReference <a name="CloudfrontOriginRequestPolicyHeadersConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyHeadersConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaderBehavior">ResetHeaderBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(CloudfrontOriginRequestPolicyHeadersConfigHeaders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---

##### `ResetHeaderBehavior` <a name="ResetHeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaderBehavior"></a>

```csharp
private void ResetHeaderBehavior()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference">CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehaviorInput">HeaderBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headersInput">HeadersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior">HeaderBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference">CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference</a>

---

##### `HeaderBehaviorInput`<sup>Optional</sup> <a name="HeaderBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehaviorInput"></a>

```csharp
public string HeaderBehaviorInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headersInput"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfigHeaders HeadersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---

##### `HeaderBehavior`<sup>Required</sup> <a name="HeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior"></a>

```csharp
public string HeaderBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontOriginRequestPolicyHeadersConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---


### CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference <a name="CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings">PutQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resetQueryStrings">ResetQueryStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryStrings` <a name="PutQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings"></a>

```csharp
private void PutQueryStrings(CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---

##### `ResetQueryStrings` <a name="ResetQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resetQueryStrings"></a>

```csharp
private void ResetQueryStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings">QueryStrings</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehaviorInput">QueryStringBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringsInput">QueryStringsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference QueryStrings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference</a>

---

##### `QueryStringBehaviorInput`<sup>Optional</sup> <a name="QueryStringBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehaviorInput"></a>

```csharp
public string QueryStringBehaviorInput { get; }
```

- *Type:* string

---

##### `QueryStringsInput`<sup>Optional</sup> <a name="QueryStringsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringsInput"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings QueryStringsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```csharp
public string QueryStringBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---


### CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference <a name="CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---



