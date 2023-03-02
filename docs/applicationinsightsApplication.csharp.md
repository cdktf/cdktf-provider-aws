# `applicationinsightsApplication` Submodule <a name="`applicationinsightsApplication` Submodule" id="@cdktf/provider-aws.applicationinsightsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationinsightsApplication <a name="ApplicationinsightsApplication" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application aws_applicationinsights_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApplicationinsightsApplication(Construct Scope, string Id, ApplicationinsightsApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig">ApplicationinsightsApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig">ApplicationinsightsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled">ResetAutoConfigEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate">ResetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled">ResetCweMonitorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType">ResetGroupingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled">ResetOpsCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn">ResetOpsItemSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAutoConfigEnabled` <a name="ResetAutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled"></a>

```csharp
private void ResetAutoConfigEnabled()
```

##### `ResetAutoCreate` <a name="ResetAutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate"></a>

```csharp
private void ResetAutoCreate()
```

##### `ResetCweMonitorEnabled` <a name="ResetCweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled"></a>

```csharp
private void ResetCweMonitorEnabled()
```

##### `ResetGroupingType` <a name="ResetGroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType"></a>

```csharp
private void ResetGroupingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpsCenterEnabled` <a name="ResetOpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled"></a>

```csharp
private void ResetOpsCenterEnabled()
```

##### `ResetOpsItemSnsTopicArn` <a name="ResetOpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn"></a>

```csharp
private void ResetOpsItemSnsTopicArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApplicationinsightsApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApplicationinsightsApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApplicationinsightsApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput">AutoConfigEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput">AutoCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput">CweMonitorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput">GroupingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput">OpsCenterEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput">OpsItemSnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled">AutoConfigEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate">AutoCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled">CweMonitorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType">GroupingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled">OpsCenterEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn">OpsItemSnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoConfigEnabledInput`<sup>Optional</sup> <a name="AutoConfigEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput"></a>

```csharp
public object AutoConfigEnabledInput { get; }
```

- *Type:* object

---

##### `AutoCreateInput`<sup>Optional</sup> <a name="AutoCreateInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput"></a>

```csharp
public object AutoCreateInput { get; }
```

- *Type:* object

---

##### `CweMonitorEnabledInput`<sup>Optional</sup> <a name="CweMonitorEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput"></a>

```csharp
public object CweMonitorEnabledInput { get; }
```

- *Type:* object

---

##### `GroupingTypeInput`<sup>Optional</sup> <a name="GroupingTypeInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput"></a>

```csharp
public string GroupingTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OpsCenterEnabledInput`<sup>Optional</sup> <a name="OpsCenterEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput"></a>

```csharp
public object OpsCenterEnabledInput { get; }
```

- *Type:* object

---

##### `OpsItemSnsTopicArnInput`<sup>Optional</sup> <a name="OpsItemSnsTopicArnInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput"></a>

```csharp
public string OpsItemSnsTopicArnInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoConfigEnabled`<sup>Required</sup> <a name="AutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled"></a>

```csharp
public object AutoConfigEnabled { get; }
```

- *Type:* object

---

##### `AutoCreate`<sup>Required</sup> <a name="AutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate"></a>

```csharp
public object AutoCreate { get; }
```

- *Type:* object

---

##### `CweMonitorEnabled`<sup>Required</sup> <a name="CweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled"></a>

```csharp
public object CweMonitorEnabled { get; }
```

- *Type:* object

---

##### `GroupingType`<sup>Required</sup> <a name="GroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType"></a>

```csharp
public string GroupingType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OpsCenterEnabled`<sup>Required</sup> <a name="OpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled"></a>

```csharp
public object OpsCenterEnabled { get; }
```

- *Type:* object

---

##### `OpsItemSnsTopicArn`<sup>Required</sup> <a name="OpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn"></a>

```csharp
public string OpsItemSnsTopicArn { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationinsightsApplicationConfig <a name="ApplicationinsightsApplicationConfig" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApplicationinsightsApplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ResourceGroupName,
    object AutoConfigEnabled = null,
    object AutoCreate = null,
    object CweMonitorEnabled = null,
    string GroupingType = null,
    string Id = null,
    object OpsCenterEnabled = null,
    string OpsItemSnsTopicArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled">AutoConfigEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate">AutoCreate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled">CweMonitorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType">GroupingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled">OpsCenterEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn">OpsItemSnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `AutoConfigEnabled`<sup>Optional</sup> <a name="AutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled"></a>

```csharp
public object AutoConfigEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `AutoCreate`<sup>Optional</sup> <a name="AutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate"></a>

```csharp
public object AutoCreate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `CweMonitorEnabled`<sup>Optional</sup> <a name="CweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled"></a>

```csharp
public object CweMonitorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `GroupingType`<sup>Optional</sup> <a name="GroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType"></a>

```csharp
public string GroupingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpsCenterEnabled`<sup>Optional</sup> <a name="OpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled"></a>

```csharp
public object OpsCenterEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `OpsItemSnsTopicArn`<sup>Optional</sup> <a name="OpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn"></a>

```csharp
public string OpsItemSnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---



