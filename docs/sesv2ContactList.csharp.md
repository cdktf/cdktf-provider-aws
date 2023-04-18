# `aws_sesv2_contact_list`

Refer to the Terraform Registory for docs: [`aws_sesv2_contact_list`](https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list).

# `sesv2ContactList` Submodule <a name="`sesv2ContactList` Submodule" id="@cdktf/provider-aws.sesv2ContactList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2ContactList <a name="Sesv2ContactList" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list aws_sesv2_contact_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ContactList(Construct Scope, string Id, Sesv2ContactListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig">Sesv2ContactListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig">Sesv2ContactListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.putTopic">PutTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTopic` <a name="PutTopic" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.putTopic"></a>

```csharp
private void PutTopic(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.putTopic.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.resetTopic"></a>

```csharp
private void ResetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ContactList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ContactList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ContactList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.topic">Topic</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList">Sesv2ContactListTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.contactListNameInput">ContactListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.topicInput">TopicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.contactListName">ContactListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.topic"></a>

```csharp
public Sesv2ContactListTopicList Topic { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList">Sesv2ContactListTopicList</a>

---

##### `ContactListNameInput`<sup>Optional</sup> <a name="ContactListNameInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.contactListNameInput"></a>

```csharp
public string ContactListNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.topicInput"></a>

```csharp
public object TopicInput { get; }
```

- *Type:* object

---

##### `ContactListName`<sup>Required</sup> <a name="ContactListName" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.contactListName"></a>

```csharp
public string ContactListName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2ContactListConfig <a name="Sesv2ContactListConfig" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ContactListConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContactListName,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.contactListName">ContactListName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#contact_list_name Sesv2ContactList#contact_list_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#description Sesv2ContactList#description}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#id Sesv2ContactList#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#tags Sesv2ContactList#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#tags_all Sesv2ContactList#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.topic">Topic</a></code> | <code>object</code> | topic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactListName`<sup>Required</sup> <a name="ContactListName" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.contactListName"></a>

```csharp
public string ContactListName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#contact_list_name Sesv2ContactList#contact_list_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#description Sesv2ContactList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#id Sesv2ContactList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#tags Sesv2ContactList#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#tags_all Sesv2ContactList#tags_all}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListConfig.property.topic"></a>

```csharp
public object Topic { get; set; }
```

- *Type:* object

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#topic Sesv2ContactList#topic}

---

### Sesv2ContactListTopic <a name="Sesv2ContactListTopic" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ContactListTopic {
    string DefaultSubscriptionStatus,
    string DisplayName,
    string TopicName,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.defaultSubscriptionStatus">DefaultSubscriptionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#default_subscription_status Sesv2ContactList#default_subscription_status}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#display_name Sesv2ContactList#display_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.topicName">TopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#topic_name Sesv2ContactList#topic_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#description Sesv2ContactList#description}. |

---

##### `DefaultSubscriptionStatus`<sup>Required</sup> <a name="DefaultSubscriptionStatus" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.defaultSubscriptionStatus"></a>

```csharp
public string DefaultSubscriptionStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#default_subscription_status Sesv2ContactList#default_subscription_status}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#display_name Sesv2ContactList#display_name}.

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.topicName"></a>

```csharp
public string TopicName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#topic_name Sesv2ContactList#topic_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopic.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_contact_list#description Sesv2ContactList#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2ContactListTopicList <a name="Sesv2ContactListTopicList" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ContactListTopicList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.get"></a>

```csharp
private Sesv2ContactListTopicOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Sesv2ContactListTopicOutputReference <a name="Sesv2ContactListTopicOutputReference" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ContactListTopicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.defaultSubscriptionStatusInput">DefaultSubscriptionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.topicNameInput">TopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.defaultSubscriptionStatus">DefaultSubscriptionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.topicName">TopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultSubscriptionStatusInput`<sup>Optional</sup> <a name="DefaultSubscriptionStatusInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.defaultSubscriptionStatusInput"></a>

```csharp
public string DefaultSubscriptionStatusInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.topicNameInput"></a>

```csharp
public string TopicNameInput { get; }
```

- *Type:* string

---

##### `DefaultSubscriptionStatus`<sup>Required</sup> <a name="DefaultSubscriptionStatus" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.defaultSubscriptionStatus"></a>

```csharp
public string DefaultSubscriptionStatus { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.topicName"></a>

```csharp
public string TopicName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ContactList.Sesv2ContactListTopicOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



