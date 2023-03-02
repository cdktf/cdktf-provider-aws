# `connectUserHierarchyGroup` Submodule <a name="`connectUserHierarchyGroup` Submodule" id="@cdktf/provider-aws.connectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyGroup <a name="ConnectUserHierarchyGroup" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group aws_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroup(Construct Scope, string Id, ConnectUserHierarchyGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig">ConnectUserHierarchyGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig">ConnectUserHierarchyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupId">ResetParentGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParentGroupId` <a name="ResetParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupId"></a>

```csharp
private void ResetParentGroupId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectUserHierarchyGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectUserHierarchyGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectUserHierarchyGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyGroupId">HierarchyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyPath">HierarchyPath</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList">ConnectUserHierarchyGroupHierarchyPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.levelId">LevelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupIdInput">ParentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupId">ParentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HierarchyGroupId`<sup>Required</sup> <a name="HierarchyGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyGroupId"></a>

```csharp
public string HierarchyGroupId { get; }
```

- *Type:* string

---

##### `HierarchyPath`<sup>Required</sup> <a name="HierarchyPath" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyPath"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathList HierarchyPath { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList">ConnectUserHierarchyGroupHierarchyPathList</a>

---

##### `LevelId`<sup>Required</sup> <a name="LevelId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.levelId"></a>

```csharp
public string LevelId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentGroupIdInput`<sup>Optional</sup> <a name="ParentGroupIdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupIdInput"></a>

```csharp
public string ParentGroupIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentGroupId`<sup>Required</sup> <a name="ParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupId"></a>

```csharp
public string ParentGroupId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyGroupConfig <a name="ConnectUserHierarchyGroupConfig" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Name,
    string Id = null,
    string ParentGroupId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupId">ParentGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentGroupId`<sup>Optional</sup> <a name="ParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupId"></a>

```csharp
public string ParentGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}.

---

### ConnectUserHierarchyGroupHierarchyPath <a name="ConnectUserHierarchyGroupHierarchyPath" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPath {

};
```


### ConnectUserHierarchyGroupHierarchyPathLevelFive <a name="ConnectUserHierarchyGroupHierarchyPathLevelFive" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelFive {

};
```


### ConnectUserHierarchyGroupHierarchyPathLevelFour <a name="ConnectUserHierarchyGroupHierarchyPathLevelFour" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelFour {

};
```


### ConnectUserHierarchyGroupHierarchyPathLevelOne <a name="ConnectUserHierarchyGroupHierarchyPathLevelOne" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelOne {

};
```


### ConnectUserHierarchyGroupHierarchyPathLevelThree <a name="ConnectUserHierarchyGroupHierarchyPathLevelThree" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelThree {

};
```


### ConnectUserHierarchyGroupHierarchyPathLevelTwo <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelTwo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyGroupHierarchyPathLevelFiveList <a name="ConnectUserHierarchyGroupHierarchyPathLevelFiveList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelFiveList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get"></a>

```csharp
private ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive">ConnectUserHierarchyGroupHierarchyPathLevelFive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelFive InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive">ConnectUserHierarchyGroupHierarchyPathLevelFive</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelFourList <a name="ConnectUserHierarchyGroupHierarchyPathLevelFourList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelFourList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get"></a>

```csharp
private ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour">ConnectUserHierarchyGroupHierarchyPathLevelFour</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelFour InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour">ConnectUserHierarchyGroupHierarchyPathLevelFour</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelOneList <a name="ConnectUserHierarchyGroupHierarchyPathLevelOneList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelOneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get"></a>

```csharp
private ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne">ConnectUserHierarchyGroupHierarchyPathLevelOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelOne InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne">ConnectUserHierarchyGroupHierarchyPathLevelOne</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelThreeList <a name="ConnectUserHierarchyGroupHierarchyPathLevelThreeList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelThreeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get"></a>

```csharp
private ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree">ConnectUserHierarchyGroupHierarchyPathLevelThree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelThree InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree">ConnectUserHierarchyGroupHierarchyPathLevelThree</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelTwoList <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwoList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelTwoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get"></a>

```csharp
private ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo">ConnectUserHierarchyGroupHierarchyPathLevelTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelTwo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo">ConnectUserHierarchyGroupHierarchyPathLevelTwo</a>

---


### ConnectUserHierarchyGroupHierarchyPathList <a name="ConnectUserHierarchyGroupHierarchyPathList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get"></a>

```csharp
private ConnectUserHierarchyGroupHierarchyPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserHierarchyGroupHierarchyPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList">ConnectUserHierarchyGroupHierarchyPathLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList">ConnectUserHierarchyGroupHierarchyPathLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList">ConnectUserHierarchyGroupHierarchyPathLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList">ConnectUserHierarchyGroupHierarchyPathLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList">ConnectUserHierarchyGroupHierarchyPathLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath">ConnectUserHierarchyGroupHierarchyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LevelFive`<sup>Required</sup> <a name="LevelFive" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelFiveList LevelFive { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList">ConnectUserHierarchyGroupHierarchyPathLevelFiveList</a>

---

##### `LevelFour`<sup>Required</sup> <a name="LevelFour" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelFourList LevelFour { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList">ConnectUserHierarchyGroupHierarchyPathLevelFourList</a>

---

##### `LevelOne`<sup>Required</sup> <a name="LevelOne" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelOneList LevelOne { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList">ConnectUserHierarchyGroupHierarchyPathLevelOneList</a>

---

##### `LevelThree`<sup>Required</sup> <a name="LevelThree" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelThreeList LevelThree { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList">ConnectUserHierarchyGroupHierarchyPathLevelThreeList</a>

---

##### `LevelTwo`<sup>Required</sup> <a name="LevelTwo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPathLevelTwoList LevelTwo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList">ConnectUserHierarchyGroupHierarchyPathLevelTwoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue"></a>

```csharp
public ConnectUserHierarchyGroupHierarchyPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath">ConnectUserHierarchyGroupHierarchyPath</a>

---



