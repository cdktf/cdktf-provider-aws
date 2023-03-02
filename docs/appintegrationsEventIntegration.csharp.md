# `appintegrationsEventIntegration` Submodule <a name="`appintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsEventIntegration <a name="AppintegrationsEventIntegration" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsEventIntegration(Construct Scope, string Id, AppintegrationsEventIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig">AppintegrationsEventIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig">AppintegrationsEventIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter">PutEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEventFilter` <a name="PutEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter"></a>

```csharp
private void PutEventFilter(AppintegrationsEventIntegrationEventFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsEventIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsEventIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsEventIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter">EventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput">EventbridgeBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput">EventFilterInput</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus">EventbridgeBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter"></a>

```csharp
public AppintegrationsEventIntegrationEventFilterOutputReference EventFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventbridgeBusInput`<sup>Optional</sup> <a name="EventbridgeBusInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput"></a>

```csharp
public string EventbridgeBusInput { get; }
```

- *Type:* string

---

##### `EventFilterInput`<sup>Optional</sup> <a name="EventFilterInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput"></a>

```csharp
public AppintegrationsEventIntegrationEventFilter EventFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventbridgeBus`<sup>Required</sup> <a name="EventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus"></a>

```csharp
public string EventbridgeBus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsEventIntegrationConfig <a name="AppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsEventIntegrationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EventbridgeBus,
    AppintegrationsEventIntegrationEventFilter EventFilter,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus">EventbridgeBus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter">EventFilter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EventbridgeBus`<sup>Required</sup> <a name="EventbridgeBus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus"></a>

```csharp
public string EventbridgeBus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}.

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter"></a>

```csharp
public AppintegrationsEventIntegrationEventFilter EventFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

event_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}.

---

### AppintegrationsEventIntegrationEventFilter <a name="AppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsEventIntegrationEventFilter {
    string Source
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsEventIntegrationEventFilterOutputReference <a name="AppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsEventIntegrationEventFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```csharp
public AppintegrationsEventIntegrationEventFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---



