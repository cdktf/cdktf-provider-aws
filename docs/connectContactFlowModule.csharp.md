# `connectContactFlowModule` Submodule <a name="`connectContactFlowModule` Submodule" id="@cdktf/provider-aws.connectContactFlowModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlowModule <a name="ConnectContactFlowModule" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module aws_connect_contact_flow_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectContactFlowModule(Construct Scope, string Id, ConnectContactFlowModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContentHash">ResetContentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentHash` <a name="ResetContentHash" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetContentHash"></a>

```csharp
private void ResetContentHash()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectContactFlowModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectContactFlowModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectContactFlowModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleId">ContactFlowModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHashInput">ContentHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHash">ContentHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContactFlowModuleId`<sup>Required</sup> <a name="ContactFlowModuleId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleId"></a>

```csharp
public string ContactFlowModuleId { get; }
```

- *Type:* string

---

##### `ContentHashInput`<sup>Optional</sup> <a name="ContentHashInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHashInput"></a>

```csharp
public string ContentHashInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentHash`<sup>Required</sup> <a name="ContentHash" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.contentHash"></a>

```csharp
public string ContentHash { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowModuleConfig <a name="ConnectContactFlowModuleConfig" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectContactFlowModuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Name,
    string Content = null,
    string ContentHash = null,
    string Description = null,
    string Filename = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#instance_id ConnectContactFlowModule#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#name ConnectContactFlowModule#name}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content ConnectContactFlowModule#content}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.contentHash">ContentHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content_hash ConnectContactFlowModule#content_hash}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#description ConnectContactFlowModule#description}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#filename ConnectContactFlowModule#filename}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#id ConnectContactFlowModule#id}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags ConnectContactFlowModule#tags}. |
| <code><a href="#@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags_all ConnectContactFlowModule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#instance_id ConnectContactFlowModule#instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#name ConnectContactFlowModule#name}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content ConnectContactFlowModule#content}.

---

##### `ContentHash`<sup>Optional</sup> <a name="ContentHash" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.contentHash"></a>

```csharp
public string ContentHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#content_hash ConnectContactFlowModule#content_hash}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#description ConnectContactFlowModule#description}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#filename ConnectContactFlowModule#filename}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#id ConnectContactFlowModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags ConnectContactFlowModule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow_module#tags_all ConnectContactFlowModule#tags_all}.

---



