# `lbCookieStickinessPolicy` Submodule <a name="`lbCookieStickinessPolicy` Submodule" id="@cdktf/provider-aws.lbCookieStickinessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbCookieStickinessPolicy <a name="LbCookieStickinessPolicy" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy aws_lb_cookie_stickiness_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbCookieStickinessPolicy(Construct Scope, string Id, LbCookieStickinessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig">LbCookieStickinessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig">LbCookieStickinessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetCookieExpirationPeriod">ResetCookieExpirationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCookieExpirationPeriod` <a name="ResetCookieExpirationPeriod" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetCookieExpirationPeriod"></a>

```csharp
private void ResetCookieExpirationPeriod()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbCookieStickinessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbCookieStickinessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbCookieStickinessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriodInput">CookieExpirationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPortInput">LbPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPort">LbPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CookieExpirationPeriodInput`<sup>Optional</sup> <a name="CookieExpirationPeriodInput" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriodInput"></a>

```csharp
public double CookieExpirationPeriodInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbPortInput`<sup>Optional</sup> <a name="LbPortInput" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPortInput"></a>

```csharp
public double LbPortInput { get; }
```

- *Type:* double

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancerInput"></a>

```csharp
public string LoadBalancerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CookieExpirationPeriod`<sup>Required</sup> <a name="CookieExpirationPeriod" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```csharp
public double CookieExpirationPeriod { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LbPort`<sup>Required</sup> <a name="LbPort" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.lbPort"></a>

```csharp
public double LbPort { get; }
```

- *Type:* double

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbCookieStickinessPolicyConfig <a name="LbCookieStickinessPolicyConfig" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbCookieStickinessPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double LbPort,
    string LoadBalancer,
    string Name,
    double CookieExpirationPeriod = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lbPort">LbPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}. |
| <code><a href="#@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LbPort`<sup>Required</sup> <a name="LbPort" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.lbPort"></a>

```csharp
public double LbPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}.

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}.

---

##### `CookieExpirationPeriod`<sup>Optional</sup> <a name="CookieExpirationPeriod" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.cookieExpirationPeriod"></a>

```csharp
public double CookieExpirationPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbCookieStickinessPolicy.LbCookieStickinessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



