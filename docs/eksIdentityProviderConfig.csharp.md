# `eksIdentityProviderConfig` Submodule <a name="`eksIdentityProviderConfig` Submodule" id="@cdktf/provider-aws.eksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksIdentityProviderConfig <a name="EksIdentityProviderConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config aws_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksIdentityProviderConfig(Construct Scope, string Id, EksIdentityProviderConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc"></a>

```csharp
private void PutOidc(EksIdentityProviderConfigOidc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(EksIdentityProviderConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksIdentityProviderConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksIdentityProviderConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EksIdentityProviderConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput">OidcInput</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc"></a>

```csharp
public EksIdentityProviderConfigOidcOutputReference Oidc { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts"></a>

```csharp
public EksIdentityProviderConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput"></a>

```csharp
public EksIdentityProviderConfigOidc OidcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksIdentityProviderConfigConfig <a name="EksIdentityProviderConfigConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksIdentityProviderConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    EksIdentityProviderConfigOidc Oidc,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    EksIdentityProviderConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}.

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc"></a>

```csharp
public EksIdentityProviderConfigOidc Oidc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts"></a>

```csharp
public EksIdentityProviderConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}

---

### EksIdentityProviderConfigOidc <a name="EksIdentityProviderConfigOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksIdentityProviderConfigOidc {
    string ClientId,
    string IdentityProviderConfigName,
    string IssuerUrl,
    string GroupsClaim = null,
    string GroupsPrefix = null,
    System.Collections.Generic.IDictionary<string, string> RequiredClaims = null,
    string UsernameClaim = null,
    string UsernamePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName">IdentityProviderConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix">GroupsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims">RequiredClaims</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim">UsernameClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix">UsernamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}.

---

##### `IdentityProviderConfigName`<sup>Required</sup> <a name="IdentityProviderConfigName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName"></a>

```csharp
public string IdentityProviderConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}.

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}.

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}.

---

##### `GroupsPrefix`<sup>Optional</sup> <a name="GroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix"></a>

```csharp
public string GroupsPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}.

---

##### `RequiredClaims`<sup>Optional</sup> <a name="RequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequiredClaims { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

##### `UsernameClaim`<sup>Optional</sup> <a name="UsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim"></a>

```csharp
public string UsernameClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}.

---

##### `UsernamePrefix`<sup>Optional</sup> <a name="UsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix"></a>

```csharp
public string UsernamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}.

---

### EksIdentityProviderConfigTimeouts <a name="EksIdentityProviderConfigTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksIdentityProviderConfigTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksIdentityProviderConfigOidcOutputReference <a name="EksIdentityProviderConfigOidcOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksIdentityProviderConfigOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix">ResetGroupsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims">ResetRequiredClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim">ResetUsernameClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix">ResetUsernamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetGroupsPrefix` <a name="ResetGroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix"></a>

```csharp
private void ResetGroupsPrefix()
```

##### `ResetRequiredClaims` <a name="ResetRequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims"></a>

```csharp
private void ResetRequiredClaims()
```

##### `ResetUsernameClaim` <a name="ResetUsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim"></a>

```csharp
private void ResetUsernameClaim()
```

##### `ResetUsernamePrefix` <a name="ResetUsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix"></a>

```csharp
private void ResetUsernamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput">GroupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput">GroupsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput">IdentityProviderConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput">RequiredClaimsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput">UsernameClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput">UsernamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">GroupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName">IdentityProviderConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims">RequiredClaims</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim">UsernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">UsernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput"></a>

```csharp
public string GroupsClaimInput { get; }
```

- *Type:* string

---

##### `GroupsPrefixInput`<sup>Optional</sup> <a name="GroupsPrefixInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput"></a>

```csharp
public string GroupsPrefixInput { get; }
```

- *Type:* string

---

##### `IdentityProviderConfigNameInput`<sup>Optional</sup> <a name="IdentityProviderConfigNameInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput"></a>

```csharp
public string IdentityProviderConfigNameInput { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `RequiredClaimsInput`<sup>Optional</sup> <a name="RequiredClaimsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequiredClaimsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UsernameClaimInput`<sup>Optional</sup> <a name="UsernameClaimInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput"></a>

```csharp
public string UsernameClaimInput { get; }
```

- *Type:* string

---

##### `UsernamePrefixInput`<sup>Optional</sup> <a name="UsernamePrefixInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput"></a>

```csharp
public string UsernamePrefixInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; }
```

- *Type:* string

---

##### `GroupsPrefix`<sup>Required</sup> <a name="GroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```csharp
public string GroupsPrefix { get; }
```

- *Type:* string

---

##### `IdentityProviderConfigName`<sup>Required</sup> <a name="IdentityProviderConfigName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName"></a>

```csharp
public string IdentityProviderConfigName { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `RequiredClaims`<sup>Required</sup> <a name="RequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequiredClaims { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UsernameClaim`<sup>Required</sup> <a name="UsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```csharp
public string UsernameClaim { get; }
```

- *Type:* string

---

##### `UsernamePrefix`<sup>Required</sup> <a name="UsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```csharp
public string UsernamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```csharp
public EksIdentityProviderConfigOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---


### EksIdentityProviderConfigTimeoutsOutputReference <a name="EksIdentityProviderConfigTimeoutsOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EksIdentityProviderConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



