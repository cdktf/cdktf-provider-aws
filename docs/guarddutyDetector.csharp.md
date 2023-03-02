# `guarddutyDetector` Submodule <a name="`guarddutyDetector` Submodule" id="@cdktf/provider-aws.guarddutyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyDetector <a name="GuarddutyDetector" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector aws_guardduty_detector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetector(Construct Scope, string Id, GuarddutyDetectorConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig">GuarddutyDetectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig">GuarddutyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources">PutDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetDatasources">ResetDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency">ResetFindingPublishingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDatasources` <a name="PutDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources"></a>

```csharp
private void PutDatasources(GuarddutyDetectorDatasources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `ResetDatasources` <a name="ResetDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetDatasources"></a>

```csharp
private void ResetDatasources()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetFindingPublishingFrequency` <a name="ResetFindingPublishingFrequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency"></a>

```csharp
private void ResetFindingPublishingFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GuarddutyDetector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GuarddutyDetector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GuarddutyDetector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasourcesInput">DatasourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput">FindingPublishingFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency">FindingPublishingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasources"></a>

```csharp
public GuarddutyDetectorDatasourcesOutputReference Datasources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a>

---

##### `DatasourcesInput`<sup>Optional</sup> <a name="DatasourcesInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasourcesInput"></a>

```csharp
public GuarddutyDetectorDatasources DatasourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `FindingPublishingFrequencyInput`<sup>Optional</sup> <a name="FindingPublishingFrequencyInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput"></a>

```csharp
public string FindingPublishingFrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `FindingPublishingFrequency`<sup>Required</sup> <a name="FindingPublishingFrequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency"></a>

```csharp
public string FindingPublishingFrequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyDetectorConfig <a name="GuarddutyDetectorConfig" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GuarddutyDetectorDatasources Datasources = null,
    object Enable = null,
    string FindingPublishingFrequency = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency">FindingPublishingFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Datasources`<sup>Optional</sup> <a name="Datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.datasources"></a>

```csharp
public GuarddutyDetectorDatasources Datasources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#datasources GuarddutyDetector#datasources}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `FindingPublishingFrequency`<sup>Optional</sup> <a name="FindingPublishingFrequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency"></a>

```csharp
public string FindingPublishingFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}.

---

### GuarddutyDetectorDatasources <a name="GuarddutyDetectorDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasources {
    GuarddutyDetectorDatasourcesKubernetes Kubernetes = null,
    GuarddutyDetectorDatasourcesMalwareProtection MalwareProtection = null,
    GuarddutyDetectorDatasourcesS3Logs S3Logs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.malwareProtection">MalwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | malware_protection block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.kubernetes"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetes Kubernetes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}

---

##### `MalwareProtection`<sup>Optional</sup> <a name="MalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.malwareProtection"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtection MalwareProtection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

malware_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs"></a>

```csharp
public GuarddutyDetectorDatasourcesS3Logs S3Logs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}

---

### GuarddutyDetectorDatasourcesKubernetes <a name="GuarddutyDetectorDatasourcesKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesKubernetes {
    GuarddutyDetectorDatasourcesKubernetesAuditLogs AuditLogs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.property.auditLogs">AuditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | audit_logs block. |

---

##### `AuditLogs`<sup>Required</sup> <a name="AuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.property.auditLogs"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetesAuditLogs AuditLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

audit_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}

---

### GuarddutyDetectorDatasourcesKubernetesAuditLogs <a name="GuarddutyDetectorDatasourcesKubernetesAuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesKubernetesAuditLogs {
    object Enable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDatasourcesMalwareProtection <a name="GuarddutyDetectorDatasourcesMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesMalwareProtection {
    GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings ScanEc2InstanceWithFindings
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | scan_ec2_instance_with_findings block. |

---

##### `ScanEc2InstanceWithFindings`<sup>Required</sup> <a name="ScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings ScanEc2InstanceWithFindings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

scan_ec2_instance_with_findings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#scan_ec2_instance_with_findings GuarddutyDetector#scan_ec2_instance_with_findings}

---

### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
    GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes EbsVolumes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">EbsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | ebs_volumes block. |

---

##### `EbsVolumes`<sup>Required</sup> <a name="EbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes EbsVolumes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

ebs_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}

---

### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
    object Enable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDatasourcesS3Logs <a name="GuarddutyDetectorDatasourcesS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesS3Logs {
    object Enable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference <a name="GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetesAuditLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---


### GuarddutyDetectorDatasourcesKubernetesOutputReference <a name="GuarddutyDetectorDatasourcesKubernetesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesKubernetesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs">PutAuditLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditLogs` <a name="PutAuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs"></a>

```csharp
private void PutAuditLogs(GuarddutyDetectorDatasourcesKubernetesAuditLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogs">AuditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogsInput">AuditLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditLogs`<sup>Required</sup> <a name="AuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogs"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference AuditLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference</a>

---

##### `AuditLogsInput`<sup>Optional</sup> <a name="AuditLogsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogsInput"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetesAuditLogs AuditLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesMalwareProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">PutScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScanEc2InstanceWithFindings` <a name="PutScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```csharp
private void PutScanEc2InstanceWithFindings(GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">ScanEc2InstanceWithFindingsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScanEc2InstanceWithFindings`<sup>Required</sup> <a name="ScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference ScanEc2InstanceWithFindings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `ScanEc2InstanceWithFindingsInput`<sup>Optional</sup> <a name="ScanEc2InstanceWithFindingsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings ScanEc2InstanceWithFindingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes">PutEbsVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsVolumes` <a name="PutEbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes"></a>

```csharp
private void PutEbsVolumes(GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">EbsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">EbsVolumesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsVolumes`<sup>Required</sup> <a name="EbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference EbsVolumes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a>

---

##### `EbsVolumesInput`<sup>Optional</sup> <a name="EbsVolumesInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes EbsVolumesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyDetectorDatasourcesOutputReference <a name="GuarddutyDetectorDatasourcesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection">PutMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs">PutS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetMalwareProtection">ResetMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs">ResetS3Logs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes"></a>

```csharp
private void PutKubernetes(GuarddutyDetectorDatasourcesKubernetes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---

##### `PutMalwareProtection` <a name="PutMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection"></a>

```csharp
private void PutMalwareProtection(GuarddutyDetectorDatasourcesMalwareProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs"></a>

```csharp
private void PutS3Logs(GuarddutyDetectorDatasourcesS3Logs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetKubernetes"></a>

```csharp
private void ResetKubernetes()
```

##### `ResetMalwareProtection` <a name="ResetMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetMalwareProtection"></a>

```csharp
private void ResetMalwareProtection()
```

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs"></a>

```csharp
private void ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference">GuarddutyDetectorDatasourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtection">MalwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtectionInput">MalwareProtectionInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetes"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetesOutputReference Kubernetes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference">GuarddutyDetectorDatasourcesKubernetesOutputReference</a>

---

##### `MalwareProtection`<sup>Required</sup> <a name="MalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtection"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtectionOutputReference MalwareProtection { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionOutputReference</a>

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs"></a>

```csharp
public GuarddutyDetectorDatasourcesS3LogsOutputReference S3Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetesInput"></a>

```csharp
public GuarddutyDetectorDatasourcesKubernetes KubernetesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---

##### `MalwareProtectionInput`<sup>Optional</sup> <a name="MalwareProtectionInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtectionInput"></a>

```csharp
public GuarddutyDetectorDatasourcesMalwareProtection MalwareProtectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput"></a>

```csharp
public GuarddutyDetectorDatasourcesS3Logs S3LogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---


### GuarddutyDetectorDatasourcesS3LogsOutputReference <a name="GuarddutyDetectorDatasourcesS3LogsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyDetectorDatasourcesS3LogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue"></a>

```csharp
public GuarddutyDetectorDatasourcesS3Logs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---



