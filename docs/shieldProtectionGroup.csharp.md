# `shieldProtectionGroup` Submodule <a name="`shieldProtectionGroup` Submodule" id="@cdktf/provider-aws.shieldProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtectionGroup <a name="ShieldProtectionGroup" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group aws_shield_protection_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProtectionGroup(Construct Scope, string Id, ShieldProtectionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig">ShieldProtectionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig">ShieldProtectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupArn">ProtectionGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupIdInput">ProtectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupId">ProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ProtectionGroupArn`<sup>Required</sup> <a name="ProtectionGroupArn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupArn"></a>

```csharp
public string ProtectionGroupArn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `ProtectionGroupIdInput`<sup>Optional</sup> <a name="ProtectionGroupIdInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupIdInput"></a>

```csharp
public string ProtectionGroupIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `ProtectionGroupId`<sup>Required</sup> <a name="ProtectionGroupId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupId"></a>

```csharp
public string ProtectionGroupId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionGroupConfig <a name="ShieldProtectionGroupConfig" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProtectionGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Aggregation,
    string Pattern,
    string ProtectionGroupId,
    string Id = null,
    string[] Members = null,
    string ResourceType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.aggregation">Aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#aggregation ShieldProtectionGroup#aggregation}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#pattern ShieldProtectionGroup#pattern}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.protectionGroupId">ProtectionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#protection_group_id ShieldProtectionGroup#protection_group_id}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#id ShieldProtectionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#members ShieldProtectionGroup#members}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#resource_type ShieldProtectionGroup#resource_type}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags ShieldProtectionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags_all ShieldProtectionGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#aggregation ShieldProtectionGroup#aggregation}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#pattern ShieldProtectionGroup#pattern}.

---

##### `ProtectionGroupId`<sup>Required</sup> <a name="ProtectionGroupId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.protectionGroupId"></a>

```csharp
public string ProtectionGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#protection_group_id ShieldProtectionGroup#protection_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#id ShieldProtectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#members ShieldProtectionGroup#members}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#resource_type ShieldProtectionGroup#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags ShieldProtectionGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags_all ShieldProtectionGroup#tags_all}.

---



