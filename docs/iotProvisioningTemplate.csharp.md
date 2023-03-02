# `iotProvisioningTemplate` Submodule <a name="`iotProvisioningTemplate` Submodule" id="@cdktf/provider-aws.iotProvisioningTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotProvisioningTemplate <a name="IotProvisioningTemplate" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template aws_iot_provisioning_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IotProvisioningTemplate(Construct Scope, string Id, IotProvisioningTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig">IotProvisioningTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig">IotProvisioningTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook">PutPreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook">ResetPreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPreProvisioningHook` <a name="PutPreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook"></a>

```csharp
private void PutPreProvisioningHook(IotProvisioningTemplatePreProvisioningHook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreProvisioningHook` <a name="ResetPreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook"></a>

```csharp
private void ResetPreProvisioningHook()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IotProvisioningTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IotProvisioningTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IotProvisioningTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.defaultVersionId">DefaultVersionId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook">PreProvisioningHook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput">PreProvisioningHookInput</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput">ProvisioningRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultVersionId`<sup>Required</sup> <a name="DefaultVersionId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.defaultVersionId"></a>

```csharp
public double DefaultVersionId { get; }
```

- *Type:* double

---

##### `PreProvisioningHook`<sup>Required</sup> <a name="PreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook"></a>

```csharp
public IotProvisioningTemplatePreProvisioningHookOutputReference PreProvisioningHook { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreProvisioningHookInput`<sup>Optional</sup> <a name="PreProvisioningHookInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput"></a>

```csharp
public IotProvisioningTemplatePreProvisioningHook PreProvisioningHookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `ProvisioningRoleArnInput`<sup>Optional</sup> <a name="ProvisioningRoleArnInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput"></a>

```csharp
public string ProvisioningRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProvisioningRoleArn`<sup>Required</sup> <a name="ProvisioningRoleArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn"></a>

```csharp
public string ProvisioningRoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotProvisioningTemplateConfig <a name="IotProvisioningTemplateConfig" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IotProvisioningTemplateConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ProvisioningRoleArn,
    string TemplateBody,
    string Description = null,
    object Enabled = null,
    string Id = null,
    IotProvisioningTemplatePreProvisioningHook PreProvisioningHook = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook">PreProvisioningHook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | pre_provisioning_hook block. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}.

---

##### `ProvisioningRoleArn`<sup>Required</sup> <a name="ProvisioningRoleArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn"></a>

```csharp
public string ProvisioningRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreProvisioningHook`<sup>Optional</sup> <a name="PreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook"></a>

```csharp
public IotProvisioningTemplatePreProvisioningHook PreProvisioningHook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

pre_provisioning_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}.

---

### IotProvisioningTemplatePreProvisioningHook <a name="IotProvisioningTemplatePreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IotProvisioningTemplatePreProvisioningHook {
    string TargetArn,
    string PayloadVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn">TargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion">PayloadVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}. |

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

##### `PayloadVersion`<sup>Optional</sup> <a name="PayloadVersion" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion"></a>

```csharp
public string PayloadVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotProvisioningTemplatePreProvisioningHookOutputReference <a name="IotProvisioningTemplatePreProvisioningHookOutputReference" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IotProvisioningTemplatePreProvisioningHookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion">ResetPayloadVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPayloadVersion` <a name="ResetPayloadVersion" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion"></a>

```csharp
private void ResetPayloadVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput">PayloadVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion">PayloadVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PayloadVersionInput`<sup>Optional</sup> <a name="PayloadVersionInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput"></a>

```csharp
public string PayloadVersionInput { get; }
```

- *Type:* string

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `PayloadVersion`<sup>Required</sup> <a name="PayloadVersion" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion"></a>

```csharp
public string PayloadVersion { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue"></a>

```csharp
public IotProvisioningTemplatePreProvisioningHook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---



