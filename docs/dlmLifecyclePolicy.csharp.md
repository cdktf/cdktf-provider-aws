# `dlmLifecyclePolicy` Submodule <a name="`dlmLifecyclePolicy` Submodule" id="@cdktf/provider-aws.dlmLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DlmLifecyclePolicy <a name="DlmLifecyclePolicy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy aws_dlm_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicy(Construct Scope, string Id, DlmLifecyclePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig">DlmLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig">DlmLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.putPolicyDetails">PutPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPolicyDetails` <a name="PutPolicyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.putPolicyDetails"></a>

```csharp
private void PutPolicyDetails(DlmLifecyclePolicyPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DlmLifecyclePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DlmLifecyclePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DlmLifecyclePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetails">PolicyDetails</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference">DlmLifecyclePolicyPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetailsInput">PolicyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetails"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsOutputReference PolicyDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference">DlmLifecyclePolicyPolicyDetailsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDetailsInput`<sup>Optional</sup> <a name="PolicyDetailsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.policyDetailsInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetails PolicyDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DlmLifecyclePolicyConfig <a name="DlmLifecyclePolicyConfig" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string ExecutionRoleArn,
    DlmLifecyclePolicyPolicyDetails PolicyDetails,
    string Id = null,
    string State = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.policyDetails">PolicyDetails</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | policy_details block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}.

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}.

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.policyDetails"></a>

```csharp
public DlmLifecyclePolicyPolicyDetails PolicyDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}.

---

### DlmLifecyclePolicyPolicyDetails <a name="DlmLifecyclePolicyPolicyDetails" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetails {
    DlmLifecyclePolicyPolicyDetailsAction Action = null,
    DlmLifecyclePolicyPolicyDetailsEventSource EventSource = null,
    DlmLifecyclePolicyPolicyDetailsParameters Parameters = null,
    string PolicyType = null,
    string[] ResourceLocations = null,
    string[] ResourceTypes = null,
    object Schedule = null,
    System.Collections.Generic.IDictionary<string, string> TargetTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.eventSource">EventSource</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a></code> | event_source block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceLocations">ResourceLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.schedule">Schedule</a></code> | <code>object</code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.targetTags">TargetTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.action"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#action DlmLifecyclePolicy#action}

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.eventSource"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSource EventSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

event_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_source DlmLifecyclePolicy#event_source}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.parameters"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}.

---

##### `ResourceLocations`<sup>Optional</sup> <a name="ResourceLocations" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceLocations"></a>

```csharp
public string[] ResourceLocations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.schedule"></a>

```csharp
public object Schedule { get; set; }
```

- *Type:* object

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#schedule DlmLifecyclePolicy#schedule}

---

##### `TargetTags`<sup>Optional</sup> <a name="TargetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails.property.targetTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TargetTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}.

---

### DlmLifecyclePolicyPolicyDetailsAction <a name="DlmLifecyclePolicyPolicyDetailsAction" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsAction {
    object CrossRegionCopy,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.crossRegionCopy">CrossRegionCopy</a></code> | <code>object</code> | cross_region_copy block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}. |

---

##### `CrossRegionCopy`<sup>Required</sup> <a name="CrossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.crossRegionCopy"></a>

```csharp
public object CrossRegionCopy { get; set; }
```

- *Type:* object

cross_region_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cross_region_copy DlmLifecyclePolicy#cross_region_copy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}.

---

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy {
    DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration EncryptionConfiguration,
    string Target,
    DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule RetainRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.retainRule">RetainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a></code> | retain_rule block. |

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.encryptionConfiguration"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encryption_configuration DlmLifecyclePolicy#encryption_configuration}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}.

---

##### `RetainRule`<sup>Optional</sup> <a name="RetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy.property.retainRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule RetainRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

retain_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}

---

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
    string CmkArn = null,
    object Encrypted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.cmkArn">CmkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}. |

---

##### `CmkArn`<sup>Optional</sup> <a name="CmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.cmkArn"></a>

```csharp
public string CmkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}.

---

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule {
    double Interval,
    string IntervalUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsEventSource <a name="DlmLifecyclePolicyPolicyDetailsEventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsEventSource {
    DlmLifecyclePolicyPolicyDetailsEventSourceParameters Parameters,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}. |

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.parameters"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSourceParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}.

---

### DlmLifecyclePolicyPolicyDetailsEventSourceParameters <a name="DlmLifecyclePolicyPolicyDetailsEventSourceParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsEventSourceParameters {
    string DescriptionRegex,
    string EventType,
    string[] SnapshotOwner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.descriptionRegex">DescriptionRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.snapshotOwner">SnapshotOwner</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}. |

---

##### `DescriptionRegex`<sup>Required</sup> <a name="DescriptionRegex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.descriptionRegex"></a>

```csharp
public string DescriptionRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}.

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}.

---

##### `SnapshotOwner`<sup>Required</sup> <a name="SnapshotOwner" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters.property.snapshotOwner"></a>

```csharp
public string[] SnapshotOwner { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}.

---

### DlmLifecyclePolicyPolicyDetailsParameters <a name="DlmLifecyclePolicyPolicyDetailsParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsParameters {
    object ExcludeBootVolume = null,
    object NoReboot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.excludeBootVolume">ExcludeBootVolume</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.noReboot">NoReboot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}. |

---

##### `ExcludeBootVolume`<sup>Optional</sup> <a name="ExcludeBootVolume" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.excludeBootVolume"></a>

```csharp
public object ExcludeBootVolume { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}.

---

##### `NoReboot`<sup>Optional</sup> <a name="NoReboot" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters.property.noReboot"></a>

```csharp
public object NoReboot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}.

---

### DlmLifecyclePolicyPolicyDetailsSchedule <a name="DlmLifecyclePolicyPolicyDetailsSchedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsSchedule {
    DlmLifecyclePolicyPolicyDetailsScheduleCreateRule CreateRule,
    string Name,
    DlmLifecyclePolicyPolicyDetailsScheduleRetainRule RetainRule,
    object CopyTags = null,
    object CrossRegionCopyRule = null,
    DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule DeprecateRule = null,
    DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule FastRestoreRule = null,
    DlmLifecyclePolicyPolicyDetailsScheduleShareRule ShareRule = null,
    System.Collections.Generic.IDictionary<string, string> TagsToAdd = null,
    System.Collections.Generic.IDictionary<string, string> VariableTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.createRule">CreateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a></code> | create_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.retainRule">RetainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a></code> | retain_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.copyTags">CopyTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.crossRegionCopyRule">CrossRegionCopyRule</a></code> | <code>object</code> | cross_region_copy_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.deprecateRule">DeprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a></code> | deprecate_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.fastRestoreRule">FastRestoreRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a></code> | fast_restore_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.shareRule">ShareRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a></code> | share_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.tagsToAdd">TagsToAdd</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.variableTags">VariableTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}. |

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.createRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRule CreateRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

create_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}.

---

##### `RetainRule`<sup>Required</sup> <a name="RetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.retainRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRule RetainRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

retain_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.copyTags"></a>

```csharp
public object CopyTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}.

---

##### `CrossRegionCopyRule`<sup>Optional</sup> <a name="CrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.crossRegionCopyRule"></a>

```csharp
public object CrossRegionCopyRule { get; set; }
```

- *Type:* object

cross_region_copy_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cross_region_copy_rule DlmLifecyclePolicy#cross_region_copy_rule}

---

##### `DeprecateRule`<sup>Optional</sup> <a name="DeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.deprecateRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule DeprecateRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

deprecate_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}

---

##### `FastRestoreRule`<sup>Optional</sup> <a name="FastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.fastRestoreRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule FastRestoreRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

fast_restore_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#fast_restore_rule DlmLifecyclePolicy#fast_restore_rule}

---

##### `ShareRule`<sup>Optional</sup> <a name="ShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.shareRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleShareRule ShareRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

share_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#share_rule DlmLifecyclePolicy#share_rule}

---

##### `TagsToAdd`<sup>Optional</sup> <a name="TagsToAdd" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.tagsToAdd"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsToAdd { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}.

---

##### `VariableTags`<sup>Optional</sup> <a name="VariableTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsSchedule.property.variableTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariableTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleCreateRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCreateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
    string CronExpression = null,
    double Interval = null,
    string IntervalUnit = null,
    string Location = null,
    string[] Times = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.times">Times</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}. |

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Optional</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}.

---

##### `Times`<sup>Optional</sup> <a name="Times" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule.property.times"></a>

```csharp
public string[] Times { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule {
    object Encrypted,
    string Target,
    string CmkArn = null,
    object CopyTags = null,
    DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule DeprecateRule = null,
    DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule RetainRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.cmkArn">CmkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.copyTags">CopyTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.deprecateRule">DeprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a></code> | deprecate_rule block. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.retainRule">RetainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a></code> | retain_rule block. |

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}.

---

##### `CmkArn`<sup>Optional</sup> <a name="CmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.cmkArn"></a>

```csharp
public string CmkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}.

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.copyTags"></a>

```csharp
public object CopyTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}.

---

##### `DeprecateRule`<sup>Optional</sup> <a name="DeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.deprecateRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule DeprecateRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

deprecate_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}

---

##### `RetainRule`<sup>Optional</sup> <a name="RetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule.property.retainRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule RetainRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

retain_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}

---

### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
    double Interval,
    string IntervalUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
    double Interval,
    string IntervalUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule {
    double Count = null,
    double Interval = null,
    string IntervalUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Optional</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule {
    string[] AvailabilityZones,
    double Count = null,
    double Interval = null,
    string IntervalUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}.

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Optional</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleRetainRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
    double Count = null,
    double Interval = null,
    string IntervalUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}.

---

##### `IntervalUnit`<sup>Optional</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}.

---

### DlmLifecyclePolicyPolicyDetailsScheduleShareRule <a name="DlmLifecyclePolicyPolicyDetailsScheduleShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleShareRule {
    string[] TargetAccounts,
    double UnshareInterval = null,
    string UnshareIntervalUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.targetAccounts">TargetAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareInterval">UnshareInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareIntervalUnit">UnshareIntervalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}. |

---

##### `TargetAccounts`<sup>Required</sup> <a name="TargetAccounts" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.targetAccounts"></a>

```csharp
public string[] TargetAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}.

---

##### `UnshareInterval`<sup>Optional</sup> <a name="UnshareInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareInterval"></a>

```csharp
public double UnshareInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}.

---

##### `UnshareIntervalUnit`<sup>Optional</sup> <a name="UnshareIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule.property.unshareIntervalUnit"></a>

```csharp
public string UnshareIntervalUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetCmkArn">ResetCmkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmkArn` <a name="ResetCmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetCmkArn"></a>

```csharp
private void ResetCmkArn()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArnInput">CmkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArn">CmkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmkArnInput`<sup>Optional</sup> <a name="CmkArnInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArnInput"></a>

```csharp
public string CmkArnInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `CmkArn`<sup>Required</sup> <a name="CmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArn"></a>

```csharp
public string CmkArn { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

---


### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.get"></a>

```csharp
private DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putRetainRule">PutRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resetRetainRule">ResetRetainRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

---

##### `PutRetainRule` <a name="PutRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putRetainRule"></a>

```csharp
private void PutRetainRule(DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.putRetainRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

---

##### `ResetRetainRule` <a name="ResetRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.resetRetainRule"></a>

```csharp
private void ResetRetainRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRule">RetainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRuleInput">RetainRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfiguration"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference</a>

---

##### `RetainRule`<sup>Required</sup> <a name="RetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference RetainRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.encryptionConfigurationInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration</a>

---

##### `RetainRuleInput`<sup>Optional</sup> <a name="RetainRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.retainRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule RetainRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule</a>

---


### DlmLifecyclePolicyPolicyDetailsActionOutputReference <a name="DlmLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.putCrossRegionCopy">PutCrossRegionCopy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossRegionCopy` <a name="PutCrossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.putCrossRegionCopy"></a>

```csharp
private void PutCrossRegionCopy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.putCrossRegionCopy.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopy">CrossRegionCopy</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopyInput">CrossRegionCopyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRegionCopy`<sup>Required</sup> <a name="CrossRegionCopy" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopy"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList CrossRegionCopy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList">DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList</a>

---

##### `CrossRegionCopyInput`<sup>Optional</sup> <a name="CrossRegionCopyInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.crossRegionCopyInput"></a>

```csharp
public object CrossRegionCopyInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

---


### DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference <a name="DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.putParameters">PutParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.putParameters"></a>

```csharp
private void PutParameters(DlmLifecyclePolicyPolicyDetailsEventSourceParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parameters"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parametersInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSourceParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

---


### DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference <a name="DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegexInput">DescriptionRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwnerInput">SnapshotOwnerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegex">DescriptionRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwner">SnapshotOwner</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionRegexInput`<sup>Optional</sup> <a name="DescriptionRegexInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegexInput"></a>

```csharp
public string DescriptionRegexInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `SnapshotOwnerInput`<sup>Optional</sup> <a name="SnapshotOwnerInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwnerInput"></a>

```csharp
public string[] SnapshotOwnerInput { get; }
```

- *Type:* string[]

---

##### `DescriptionRegex`<sup>Required</sup> <a name="DescriptionRegex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegex"></a>

```csharp
public string DescriptionRegex { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `SnapshotOwner`<sup>Required</sup> <a name="SnapshotOwner" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwner"></a>

```csharp
public string[] SnapshotOwner { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSourceParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceParameters">DlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---


### DlmLifecyclePolicyPolicyDetailsOutputReference <a name="DlmLifecyclePolicyPolicyDetailsOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putEventSource">PutEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceLocations">ResetResourceLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetTargetTags">ResetTargetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```csharp
private void PutAction(DlmLifecyclePolicyPolicyDetailsAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

---

##### `PutEventSource` <a name="PutEventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putEventSource"></a>

```csharp
private void PutEventSource(DlmLifecyclePolicyPolicyDetailsEventSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putEventSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putParameters"></a>

```csharp
private void PutParameters(DlmLifecyclePolicyPolicyDetailsParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.putSchedule.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetEventSource"></a>

```csharp
private void ResetEventSource()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetResourceLocations` <a name="ResetResourceLocations" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceLocations"></a>

```csharp
private void ResetResourceLocations()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTargetTags` <a name="ResetTargetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.resetTargetTags"></a>

```csharp
private void ResetTargetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference">DlmLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSource">EventSource</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference">DlmLifecyclePolicyPolicyDetailsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList">DlmLifecyclePolicyPolicyDetailsScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocationsInput">ResourceLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTagsInput">TargetTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocations">ResourceLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTags">TargetTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsActionOutputReference">DlmLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSource"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference EventSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference">DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parameters"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference">DlmLifecyclePolicyPolicyDetailsParametersOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.schedule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList">DlmLifecyclePolicyPolicyDetailsScheduleList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsAction">DlmLifecyclePolicyPolicyDetailsAction</a>

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSourceInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsEventSource EventSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsEventSource">DlmLifecyclePolicyPolicyDetailsEventSource</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.parametersInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `ResourceLocationsInput`<sup>Optional</sup> <a name="ResourceLocationsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocationsInput"></a>

```csharp
public string[] ResourceLocationsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `TargetTagsInput`<sup>Optional</sup> <a name="TargetTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TargetTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ResourceLocations`<sup>Required</sup> <a name="ResourceLocations" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocations"></a>

```csharp
public string[] ResourceLocations { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `TargetTags`<sup>Required</sup> <a name="TargetTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TargetTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetails">DlmLifecyclePolicyPolicyDetails</a>

---


### DlmLifecyclePolicyPolicyDetailsParametersOutputReference <a name="DlmLifecyclePolicyPolicyDetailsParametersOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetExcludeBootVolume">ResetExcludeBootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetNoReboot">ResetNoReboot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeBootVolume` <a name="ResetExcludeBootVolume" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetExcludeBootVolume"></a>

```csharp
private void ResetExcludeBootVolume()
```

##### `ResetNoReboot` <a name="ResetNoReboot" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.resetNoReboot"></a>

```csharp
private void ResetNoReboot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolumeInput">ExcludeBootVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noRebootInput">NoRebootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolume">ExcludeBootVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noReboot">NoReboot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeBootVolumeInput`<sup>Optional</sup> <a name="ExcludeBootVolumeInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolumeInput"></a>

```csharp
public object ExcludeBootVolumeInput { get; }
```

- *Type:* object

---

##### `NoRebootInput`<sup>Optional</sup> <a name="NoRebootInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noRebootInput"></a>

```csharp
public object NoRebootInput { get; }
```

- *Type:* object

---

##### `ExcludeBootVolume`<sup>Required</sup> <a name="ExcludeBootVolume" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolume"></a>

```csharp
public object ExcludeBootVolume { get; }
```

- *Type:* object

---

##### `NoReboot`<sup>Required</sup> <a name="NoReboot" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noReboot"></a>

```csharp
public object NoReboot { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsParameters">DlmLifecyclePolicyPolicyDetailsParameters</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetIntervalUnit">ResetIntervalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetTimes">ResetTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetIntervalUnit` <a name="ResetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetIntervalUnit"></a>

```csharp
private void ResetIntervalUnit()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTimes` <a name="ResetTimes" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.resetTimes"></a>

```csharp
private void ResetTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.timesInput">TimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.times">Times</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimesInput`<sup>Optional</sup> <a name="TimesInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.timesInput"></a>

```csharp
public string[] TimesInput { get; }
```

- *Type:* string[]

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Times`<sup>Required</sup> <a name="Times" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.times"></a>

```csharp
public string[] Times { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.get"></a>

```csharp
private DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putDeprecateRule">PutDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putRetainRule">PutRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCmkArn">ResetCmkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetDeprecateRule">ResetDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetRetainRule">ResetRetainRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeprecateRule` <a name="PutDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putDeprecateRule"></a>

```csharp
private void PutDeprecateRule(DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putDeprecateRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

---

##### `PutRetainRule` <a name="PutRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putRetainRule"></a>

```csharp
private void PutRetainRule(DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.putRetainRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

---

##### `ResetCmkArn` <a name="ResetCmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCmkArn"></a>

```csharp
private void ResetCmkArn()
```

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetCopyTags"></a>

```csharp
private void ResetCopyTags()
```

##### `ResetDeprecateRule` <a name="ResetDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetDeprecateRule"></a>

```csharp
private void ResetDeprecateRule()
```

##### `ResetRetainRule` <a name="ResetRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.resetRetainRule"></a>

```csharp
private void ResetRetainRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRule">DeprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRule">RetainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArnInput">CmkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTagsInput">CopyTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRuleInput">DeprecateRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRuleInput">RetainRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArn">CmkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTags">CopyTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeprecateRule`<sup>Required</sup> <a name="DeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference DeprecateRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference</a>

---

##### `RetainRule`<sup>Required</sup> <a name="RetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference RetainRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference</a>

---

##### `CmkArnInput`<sup>Optional</sup> <a name="CmkArnInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArnInput"></a>

```csharp
public string CmkArnInput { get; }
```

- *Type:* string

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTagsInput"></a>

```csharp
public object CopyTagsInput { get; }
```

- *Type:* object

---

##### `DeprecateRuleInput`<sup>Optional</sup> <a name="DeprecateRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.deprecateRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule DeprecateRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `RetainRuleInput`<sup>Optional</sup> <a name="RetainRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.retainRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule RetainRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `CmkArn`<sup>Required</sup> <a name="CmkArn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.cmkArn"></a>

```csharp
public string CmkArn { get; }
```

- *Type:* string

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.copyTags"></a>

```csharp
public object CopyTags { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetIntervalUnit">ResetIntervalUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetIntervalUnit` <a name="ResetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.resetIntervalUnit"></a>

```csharp
private void ResetIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetIntervalUnit">ResetIntervalUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetIntervalUnit` <a name="ResetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.resetIntervalUnit"></a>

```csharp
private void ResetIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleList <a name="DlmLifecyclePolicyPolicyDetailsScheduleList" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.get"></a>

```csharp
private DlmLifecyclePolicyPolicyDetailsScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DlmLifecyclePolicyPolicyDetailsScheduleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCreateRule">PutCreateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCrossRegionCopyRule">PutCrossRegionCopyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putDeprecateRule">PutDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putFastRestoreRule">PutFastRestoreRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putRetainRule">PutRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putShareRule">PutShareRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCrossRegionCopyRule">ResetCrossRegionCopyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetDeprecateRule">ResetDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetFastRestoreRule">ResetFastRestoreRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetShareRule">ResetShareRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetTagsToAdd">ResetTagsToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetVariableTags">ResetVariableTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreateRule` <a name="PutCreateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCreateRule"></a>

```csharp
private void PutCreateRule(DlmLifecyclePolicyPolicyDetailsScheduleCreateRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCreateRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

---

##### `PutCrossRegionCopyRule` <a name="PutCrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCrossRegionCopyRule"></a>

```csharp
private void PutCrossRegionCopyRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putCrossRegionCopyRule.parameter.value"></a>

- *Type:* object

---

##### `PutDeprecateRule` <a name="PutDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putDeprecateRule"></a>

```csharp
private void PutDeprecateRule(DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putDeprecateRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

---

##### `PutFastRestoreRule` <a name="PutFastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putFastRestoreRule"></a>

```csharp
private void PutFastRestoreRule(DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putFastRestoreRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

---

##### `PutRetainRule` <a name="PutRetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putRetainRule"></a>

```csharp
private void PutRetainRule(DlmLifecyclePolicyPolicyDetailsScheduleRetainRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putRetainRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

---

##### `PutShareRule` <a name="PutShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putShareRule"></a>

```csharp
private void PutShareRule(DlmLifecyclePolicyPolicyDetailsScheduleShareRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.putShareRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

---

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCopyTags"></a>

```csharp
private void ResetCopyTags()
```

##### `ResetCrossRegionCopyRule` <a name="ResetCrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetCrossRegionCopyRule"></a>

```csharp
private void ResetCrossRegionCopyRule()
```

##### `ResetDeprecateRule` <a name="ResetDeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetDeprecateRule"></a>

```csharp
private void ResetDeprecateRule()
```

##### `ResetFastRestoreRule` <a name="ResetFastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetFastRestoreRule"></a>

```csharp
private void ResetFastRestoreRule()
```

##### `ResetShareRule` <a name="ResetShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetShareRule"></a>

```csharp
private void ResetShareRule()
```

##### `ResetTagsToAdd` <a name="ResetTagsToAdd" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetTagsToAdd"></a>

```csharp
private void ResetTagsToAdd()
```

##### `ResetVariableTags` <a name="ResetVariableTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.resetVariableTags"></a>

```csharp
private void ResetVariableTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRule">CreateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRule">CrossRegionCopyRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRule">DeprecateRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRule">FastRestoreRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRule">RetainRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRule">ShareRule</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTagsInput">CopyTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRuleInput">CreateRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRuleInput">CrossRegionCopyRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRuleInput">DeprecateRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRuleInput">FastRestoreRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRuleInput">RetainRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRuleInput">ShareRuleInput</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAddInput">TagsToAddInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTagsInput">VariableTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTags">CopyTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAdd">TagsToAdd</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTags">VariableTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference CreateRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference</a>

---

##### `CrossRegionCopyRule`<sup>Required</sup> <a name="CrossRegionCopyRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList CrossRegionCopyRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList">DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList</a>

---

##### `DeprecateRule`<sup>Required</sup> <a name="DeprecateRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference DeprecateRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference</a>

---

##### `FastRestoreRule`<sup>Required</sup> <a name="FastRestoreRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference FastRestoreRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference</a>

---

##### `RetainRule`<sup>Required</sup> <a name="RetainRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference RetainRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference</a>

---

##### `ShareRule`<sup>Required</sup> <a name="ShareRule" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRule"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference ShareRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference">DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference</a>

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTagsInput"></a>

```csharp
public object CopyTagsInput { get; }
```

- *Type:* object

---

##### `CreateRuleInput`<sup>Optional</sup> <a name="CreateRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.createRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleCreateRule CreateRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleCreateRule">DlmLifecyclePolicyPolicyDetailsScheduleCreateRule</a>

---

##### `CrossRegionCopyRuleInput`<sup>Optional</sup> <a name="CrossRegionCopyRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.crossRegionCopyRuleInput"></a>

```csharp
public object CrossRegionCopyRuleInput { get; }
```

- *Type:* object

---

##### `DeprecateRuleInput`<sup>Optional</sup> <a name="DeprecateRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.deprecateRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule DeprecateRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule">DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule</a>

---

##### `FastRestoreRuleInput`<sup>Optional</sup> <a name="FastRestoreRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.fastRestoreRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule FastRestoreRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule">DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetainRuleInput`<sup>Optional</sup> <a name="RetainRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.retainRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRule RetainRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

---

##### `ShareRuleInput`<sup>Optional</sup> <a name="ShareRuleInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.shareRuleInput"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleShareRule ShareRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

---

##### `TagsToAddInput`<sup>Optional</sup> <a name="TagsToAddInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAddInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsToAddInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VariableTagsInput`<sup>Optional</sup> <a name="VariableTagsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariableTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.copyTags"></a>

```csharp
public object CopyTags { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TagsToAdd`<sup>Required</sup> <a name="TagsToAdd" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.tagsToAdd"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsToAdd { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VariableTags`<sup>Required</sup> <a name="VariableTags" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.variableTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariableTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetIntervalUnit">ResetIntervalUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetIntervalUnit` <a name="ResetIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.resetIntervalUnit"></a>

```csharp
private void ResetIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnitInput">IntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnit">IntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `IntervalUnitInput`<sup>Optional</sup> <a name="IntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnitInput"></a>

```csharp
public string IntervalUnitInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `IntervalUnit`<sup>Required</sup> <a name="IntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.intervalUnit"></a>

```csharp
public string IntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleRetainRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleRetainRule">DlmLifecyclePolicyPolicyDetailsScheduleRetainRule</a>

---


### DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference <a name="DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareInterval">ResetUnshareInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareIntervalUnit">ResetUnshareIntervalUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnshareInterval` <a name="ResetUnshareInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareInterval"></a>

```csharp
private void ResetUnshareInterval()
```

##### `ResetUnshareIntervalUnit` <a name="ResetUnshareIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.resetUnshareIntervalUnit"></a>

```csharp
private void ResetUnshareIntervalUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccountsInput">TargetAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalInput">UnshareIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnitInput">UnshareIntervalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccounts">TargetAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareInterval">UnshareInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnit">UnshareIntervalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetAccountsInput`<sup>Optional</sup> <a name="TargetAccountsInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccountsInput"></a>

```csharp
public string[] TargetAccountsInput { get; }
```

- *Type:* string[]

---

##### `UnshareIntervalInput`<sup>Optional</sup> <a name="UnshareIntervalInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalInput"></a>

```csharp
public double UnshareIntervalInput { get; }
```

- *Type:* double

---

##### `UnshareIntervalUnitInput`<sup>Optional</sup> <a name="UnshareIntervalUnitInput" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnitInput"></a>

```csharp
public string UnshareIntervalUnitInput { get; }
```

- *Type:* string

---

##### `TargetAccounts`<sup>Required</sup> <a name="TargetAccounts" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.targetAccounts"></a>

```csharp
public string[] TargetAccounts { get; }
```

- *Type:* string[]

---

##### `UnshareInterval`<sup>Required</sup> <a name="UnshareInterval" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareInterval"></a>

```csharp
public double UnshareInterval { get; }
```

- *Type:* double

---

##### `UnshareIntervalUnit`<sup>Required</sup> <a name="UnshareIntervalUnit" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.unshareIntervalUnit"></a>

```csharp
public string UnshareIntervalUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference.property.internalValue"></a>

```csharp
public DlmLifecyclePolicyPolicyDetailsScheduleShareRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dlmLifecyclePolicy.DlmLifecyclePolicyPolicyDetailsScheduleShareRule">DlmLifecyclePolicyPolicyDetailsScheduleShareRule</a>

---



