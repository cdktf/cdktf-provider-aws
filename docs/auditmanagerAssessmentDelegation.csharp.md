# `auditmanagerAssessmentDelegation` Submodule <a name="`auditmanagerAssessmentDelegation` Submodule" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentDelegation <a name="AuditmanagerAssessmentDelegation" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AuditmanagerAssessmentDelegation(Construct Scope, string Id, AuditmanagerAssessmentDelegationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig">AuditmanagerAssessmentDelegationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig">AuditmanagerAssessmentDelegationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment"></a>

```csharp
private void ResetComment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAssessmentDelegation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAssessmentDelegation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerAssessmentDelegation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId">DelegationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput">AssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput">ControlSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId">ControlSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DelegationId`<sup>Required</sup> <a name="DelegationId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId"></a>

```csharp
public string DelegationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AssessmentIdInput`<sup>Optional</sup> <a name="AssessmentIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput"></a>

```csharp
public string AssessmentIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ControlSetIdInput`<sup>Optional</sup> <a name="ControlSetIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput"></a>

```csharp
public string ControlSetIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ControlSetId`<sup>Required</sup> <a name="ControlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId"></a>

```csharp
public string ControlSetId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentDelegationConfig <a name="AuditmanagerAssessmentDelegationConfig" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AuditmanagerAssessmentDelegationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssessmentId,
    string ControlSetId,
    string RoleArn,
    string RoleType,
    string Comment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId">AssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId">ControlSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType">RoleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId"></a>

```csharp
public string AssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `ControlSetId`<sup>Required</sup> <a name="ControlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId"></a>

```csharp
public string ControlSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---



