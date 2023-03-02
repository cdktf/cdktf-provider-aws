# `dataAwsCodecommitApprovalRuleTemplate` Submodule <a name="`dataAwsCodecommitApprovalRuleTemplate` Submodule" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodecommitApprovalRuleTemplate <a name="DataAwsCodecommitApprovalRuleTemplate" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template aws_codecommit_approval_rule_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecommitApprovalRuleTemplate(Construct Scope, string Id, DataAwsCodecommitApprovalRuleTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig">DataAwsCodecommitApprovalRuleTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig">DataAwsCodecommitApprovalRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecommitApprovalRuleTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecommitApprovalRuleTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecommitApprovalRuleTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.approvalRuleTemplateId">ApprovalRuleTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedUser">LastModifiedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.ruleContentSha256">RuleContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApprovalRuleTemplateId`<sup>Required</sup> <a name="ApprovalRuleTemplateId" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.approvalRuleTemplateId"></a>

```csharp
public string ApprovalRuleTemplateId { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `LastModifiedUser`<sup>Required</sup> <a name="LastModifiedUser" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.lastModifiedUser"></a>

```csharp
public string LastModifiedUser { get; }
```

- *Type:* string

---

##### `RuleContentSha256`<sup>Required</sup> <a name="RuleContentSha256" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.ruleContentSha256"></a>

```csharp
public string RuleContentSha256 { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodecommitApprovalRuleTemplateConfig <a name="DataAwsCodecommitApprovalRuleTemplateConfig" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecommitApprovalRuleTemplateConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template#name DataAwsCodecommitApprovalRuleTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template#id DataAwsCodecommitApprovalRuleTemplate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template#name DataAwsCodecommitApprovalRuleTemplate#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecommitApprovalRuleTemplate.DataAwsCodecommitApprovalRuleTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template#id DataAwsCodecommitApprovalRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



