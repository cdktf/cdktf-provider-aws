# `sesv2EmailIdentityFeedbackAttributes` Submodule <a name="`sesv2EmailIdentityFeedbackAttributes` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityFeedbackAttributes <a name="Sesv2EmailIdentityFeedbackAttributes" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityFeedbackAttributes(Construct Scope, string Id, Sesv2EmailIdentityFeedbackAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig">Sesv2EmailIdentityFeedbackAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig">Sesv2EmailIdentityFeedbackAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled">ResetEmailForwardingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEmailForwardingEnabled` <a name="ResetEmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled"></a>

```csharp
private void ResetEmailForwardingEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityFeedbackAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityFeedbackAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityFeedbackAttributes.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput">EmailForwardingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled">EmailForwardingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EmailForwardingEnabledInput`<sup>Optional</sup> <a name="EmailForwardingEnabledInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput"></a>

```csharp
public object EmailForwardingEnabledInput { get; }
```

- *Type:* object

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput"></a>

```csharp
public string EmailIdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `EmailForwardingEnabled`<sup>Required</sup> <a name="EmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```csharp
public object EmailForwardingEnabled { get; }
```

- *Type:* object

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityFeedbackAttributesConfig <a name="Sesv2EmailIdentityFeedbackAttributesConfig" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityFeedbackAttributesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailIdentity,
    object EmailForwardingEnabled = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled">EmailForwardingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}.

---

##### `EmailForwardingEnabled`<sup>Optional</sup> <a name="EmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled"></a>

```csharp
public object EmailForwardingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



