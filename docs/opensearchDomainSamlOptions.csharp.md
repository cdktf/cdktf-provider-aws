# `opensearchDomainSamlOptions` Submodule <a name="`opensearchDomainSamlOptions` Submodule" id="@cdktf/provider-aws.opensearchDomainSamlOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomainSamlOptions <a name="OpensearchDomainSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options aws_opensearch_domain_saml_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptions(Construct Scope, string Id, OpensearchDomainSamlOptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig">OpensearchDomainSamlOptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig">OpensearchDomainSamlOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions">PutSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetSamlOptions">ResetSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSamlOptions` <a name="PutSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions"></a>

```csharp
private void PutSamlOptions(OpensearchDomainSamlOptionsSamlOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts"></a>

```csharp
private void PutTimeouts(OpensearchDomainSamlOptionsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSamlOptions` <a name="ResetSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetSamlOptions"></a>

```csharp
private void ResetSamlOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchDomainSamlOptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchDomainSamlOptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchDomainSamlOptions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference">OpensearchDomainSamlOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference">OpensearchDomainSamlOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptionsInput">SamlOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptions"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptionsOutputReference SamlOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference">OpensearchDomainSamlOptionsSamlOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeouts"></a>

```csharp
public OpensearchDomainSamlOptionsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference">OpensearchDomainSamlOptionsTimeoutsOutputReference</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SamlOptionsInput`<sup>Optional</sup> <a name="SamlOptionsInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptionsInput"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptions SamlOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainSamlOptionsConfig <a name="OpensearchDomainSamlOptionsConfig" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    string Id = null,
    OpensearchDomainSamlOptionsSamlOptions SamlOptions = null,
    OpensearchDomainSamlOptionsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SamlOptions`<sup>Optional</sup> <a name="SamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.samlOptions"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptions SamlOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#saml_options OpensearchDomainSamlOptions#saml_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.timeouts"></a>

```csharp
public OpensearchDomainSamlOptionsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#timeouts OpensearchDomainSamlOptions#timeouts}

---

### OpensearchDomainSamlOptionsSamlOptions <a name="OpensearchDomainSamlOptionsSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsSamlOptions {
    object Enabled = null,
    OpensearchDomainSamlOptionsSamlOptionsIdp Idp = null,
    string MasterBackendRole = null,
    string MasterUserName = null,
    string RolesKey = null,
    double SessionTimeoutMinutes = null,
    string SubjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.idp">Idp</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | idp block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterBackendRole">MasterBackendRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterUserName">MasterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.rolesKey">RolesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.subjectKey">SubjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}.

---

##### `Idp`<sup>Optional</sup> <a name="Idp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.idp"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptionsIdp Idp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#idp OpensearchDomainSamlOptions#idp}

---

##### `MasterBackendRole`<sup>Optional</sup> <a name="MasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterBackendRole"></a>

```csharp
public string MasterBackendRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterUserName"></a>

```csharp
public string MasterUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}.

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.rolesKey"></a>

```csharp
public string RolesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}.

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}.

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.subjectKey"></a>

```csharp
public string SubjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}.

---

### OpensearchDomainSamlOptionsSamlOptionsIdp <a name="OpensearchDomainSamlOptionsSamlOptionsIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsSamlOptionsIdp {
    string EntityId,
    string MetadataContent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent">MetadataContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}.

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent"></a>

```csharp
public string MetadataContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}.

---

### OpensearchDomainSamlOptionsTimeouts <a name="OpensearchDomainSamlOptionsTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsTimeouts {
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference <a name="OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">MetadataContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent">MetadataContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `MetadataContentInput`<sup>Optional</sup> <a name="MetadataContentInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```csharp
public string MetadataContentInput { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `MetadataContent`<sup>Required</sup> <a name="MetadataContent" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```csharp
public string MetadataContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptionsIdp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---


### OpensearchDomainSamlOptionsSamlOptionsOutputReference <a name="OpensearchDomainSamlOptionsSamlOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsSamlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp">PutIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp">ResetIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole">ResetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdp` <a name="PutIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp"></a>

```csharp
private void PutIdp(OpensearchDomainSamlOptionsSamlOptionsIdp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIdp` <a name="ResetIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp"></a>

```csharp
private void ResetIdp()
```

##### `ResetMasterBackendRole` <a name="ResetMasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```csharp
private void ResetMasterBackendRole()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```csharp
private void ResetMasterUserName()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```csharp
private void ResetRolesKey()
```

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```csharp
private void ResetSessionTimeoutMinutes()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```csharp
private void ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idp">Idp</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference">OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput">IdpInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">MasterBackendRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole">MasterBackendRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey">RolesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey">SubjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Idp`<sup>Required</sup> <a name="Idp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idp"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference Idp { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference">OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdpInput`<sup>Optional</sup> <a name="IdpInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptionsIdp IdpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `MasterBackendRoleInput`<sup>Optional</sup> <a name="MasterBackendRoleInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```csharp
public string MasterBackendRoleInput { get; }
```

- *Type:* string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```csharp
public string MasterUserNameInput { get; }
```

- *Type:* string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```csharp
public string RolesKeyInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```csharp
public double SessionTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```csharp
public string SubjectKeyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `MasterBackendRole`<sup>Required</sup> <a name="MasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```csharp
public string MasterBackendRole { get; }
```

- *Type:* string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```csharp
public string MasterUserName { get; }
```

- *Type:* string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```csharp
public string RolesKey { get; }
```

- *Type:* string

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```csharp
public double SessionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```csharp
public string SubjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue"></a>

```csharp
public OpensearchDomainSamlOptionsSamlOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---


### OpensearchDomainSamlOptionsTimeoutsOutputReference <a name="OpensearchDomainSamlOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchDomainSamlOptionsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



