# `backupPlan` Submodule <a name="`backupPlan` Submodule" id="@cdktf/provider-aws.backupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPlan <a name="BackupPlan" id="@cdktf/provider-aws.backupPlan.BackupPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlan(Construct Scope, string Id, BackupPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting">PutAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting">ResetAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdvancedBackupSetting` <a name="PutAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting"></a>

```csharp
private void PutAdvancedBackupSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting.parameter.value"></a>

- *Type:* object

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetAdvancedBackupSetting` <a name="ResetAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting"></a>

```csharp
private void ResetAdvancedBackupSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting">AdvancedBackupSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput">AdvancedBackupSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedBackupSetting`<sup>Required</sup> <a name="AdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting"></a>

```csharp
public BackupPlanAdvancedBackupSettingList AdvancedBackupSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.rule"></a>

```csharp
public BackupPlanRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AdvancedBackupSettingInput`<sup>Optional</sup> <a name="AdvancedBackupSettingInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput"></a>

```csharp
public object AdvancedBackupSettingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPlanAdvancedBackupSetting <a name="BackupPlanAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanAdvancedBackupSetting {
    System.Collections.Generic.IDictionary<string, string> BackupOptions,
    string ResourceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions">BackupOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}. |

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}.

---

### BackupPlanConfig <a name="BackupPlanConfig" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Rule,
    object AdvancedBackupSetting = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting">AdvancedBackupSetting</a></code> | <code>object</code> | advanced_backup_setting block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule BackupPlan#rule}

---

##### `AdvancedBackupSetting`<sup>Optional</sup> <a name="AdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting"></a>

```csharp
public object AdvancedBackupSetting { get; set; }
```

- *Type:* object

advanced_backup_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}.

---

### BackupPlanRule <a name="BackupPlanRule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRule {
    string RuleName,
    string TargetVaultName,
    double CompletionWindow = null,
    object CopyAction = null,
    object EnableContinuousBackup = null,
    BackupPlanRuleLifecycle Lifecycle = null,
    System.Collections.Generic.IDictionary<string, string> RecoveryPointTags = null,
    string Schedule = null,
    double StartWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName">TargetVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow">CompletionWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction">CopyAction</a></code> | <code>object</code> | copy_action block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | lifecycle block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow">StartWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}. |

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}.

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName"></a>

```csharp
public string TargetVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}.

---

##### `CompletionWindow`<sup>Optional</sup> <a name="CompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow"></a>

```csharp
public double CompletionWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}.

---

##### `CopyAction`<sup>Optional</sup> <a name="CopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction"></a>

```csharp
public object CopyAction { get; set; }
```

- *Type:* object

copy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#copy_action BackupPlan#copy_action}

---

##### `EnableContinuousBackup`<sup>Optional</sup> <a name="EnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup"></a>

```csharp
public object EnableContinuousBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle"></a>

```csharp
public BackupPlanRuleLifecycle Lifecycle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

##### `RecoveryPointTags`<sup>Optional</sup> <a name="RecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RecoveryPointTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}.

---

##### `StartWindow`<sup>Optional</sup> <a name="StartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow"></a>

```csharp
public double StartWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}.

---

### BackupPlanRuleCopyAction <a name="BackupPlanRuleCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleCopyAction {
    string DestinationVaultArn,
    BackupPlanRuleCopyActionLifecycle Lifecycle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | lifecycle block. |

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn"></a>

```csharp
public string DestinationVaultArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle"></a>

```csharp
public BackupPlanRuleCopyActionLifecycle Lifecycle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

### BackupPlanRuleCopyActionLifecycle <a name="BackupPlanRuleCopyActionLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleCopyActionLifecycle {
    double ColdStorageAfter = null,
    double DeleteAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter">DeleteAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `ColdStorageAfter`<sup>Optional</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter"></a>

```csharp
public double ColdStorageAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `DeleteAfter`<sup>Optional</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter"></a>

```csharp
public double DeleteAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

### BackupPlanRuleLifecycle <a name="BackupPlanRuleLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleLifecycle {
    double ColdStorageAfter = null,
    double DeleteAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter">DeleteAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `ColdStorageAfter`<sup>Optional</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter"></a>

```csharp
public double ColdStorageAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `DeleteAfter`<sup>Optional</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter"></a>

```csharp
public double DeleteAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPlanAdvancedBackupSettingList <a name="BackupPlanAdvancedBackupSettingList" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanAdvancedBackupSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get"></a>

```csharp
private BackupPlanAdvancedBackupSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPlanAdvancedBackupSettingOutputReference <a name="BackupPlanAdvancedBackupSettingOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanAdvancedBackupSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput">BackupOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions">BackupOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupOptionsInput`<sup>Optional</sup> <a name="BackupOptionsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BackupOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPlanRuleCopyActionLifecycleOutputReference <a name="BackupPlanRuleCopyActionLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleCopyActionLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter">ResetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter">ResetDeleteAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColdStorageAfter` <a name="ResetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter"></a>

```csharp
private void ResetColdStorageAfter()
```

##### `ResetDeleteAfter` <a name="ResetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter"></a>

```csharp
private void ResetDeleteAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput">ColdStorageAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput">DeleteAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColdStorageAfterInput`<sup>Optional</sup> <a name="ColdStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput"></a>

```csharp
public double ColdStorageAfterInput { get; }
```

- *Type:* double

---

##### `DeleteAfterInput`<sup>Optional</sup> <a name="DeleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput"></a>

```csharp
public double DeleteAfterInput { get; }
```

- *Type:* double

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter"></a>

```csharp
public double ColdStorageAfter { get; }
```

- *Type:* double

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter"></a>

```csharp
public double DeleteAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue"></a>

```csharp
public BackupPlanRuleCopyActionLifecycle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---


### BackupPlanRuleCopyActionList <a name="BackupPlanRuleCopyActionList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleCopyActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get"></a>

```csharp
private BackupPlanRuleCopyActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPlanRuleCopyActionOutputReference <a name="BackupPlanRuleCopyActionOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleCopyActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle"></a>

```csharp
private void PutLifecycle(BackupPlanRuleCopyActionLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle"></a>

```csharp
private void ResetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput">DestinationVaultArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle"></a>

```csharp
public BackupPlanRuleCopyActionLifecycleOutputReference Lifecycle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a>

---

##### `DestinationVaultArnInput`<sup>Optional</sup> <a name="DestinationVaultArnInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput"></a>

```csharp
public string DestinationVaultArnInput { get; }
```

- *Type:* string

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput"></a>

```csharp
public BackupPlanRuleCopyActionLifecycle LifecycleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn"></a>

```csharp
public string DestinationVaultArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPlanRuleLifecycleOutputReference <a name="BackupPlanRuleLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter">ResetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter">ResetDeleteAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColdStorageAfter` <a name="ResetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter"></a>

```csharp
private void ResetColdStorageAfter()
```

##### `ResetDeleteAfter` <a name="ResetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter"></a>

```csharp
private void ResetDeleteAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput">ColdStorageAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput">DeleteAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColdStorageAfterInput`<sup>Optional</sup> <a name="ColdStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput"></a>

```csharp
public double ColdStorageAfterInput { get; }
```

- *Type:* double

---

##### `DeleteAfterInput`<sup>Optional</sup> <a name="DeleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput"></a>

```csharp
public double DeleteAfterInput { get; }
```

- *Type:* double

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter"></a>

```csharp
public double ColdStorageAfter { get; }
```

- *Type:* double

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter"></a>

```csharp
public double DeleteAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```csharp
public BackupPlanRuleLifecycle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---


### BackupPlanRuleList <a name="BackupPlanRuleList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get"></a>

```csharp
private BackupPlanRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupPlanRuleOutputReference <a name="BackupPlanRuleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupPlanRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction">PutCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow">ResetCompletionWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction">ResetCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup">ResetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags">ResetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow">ResetStartWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyAction` <a name="PutCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction"></a>

```csharp
private void PutCopyAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction.parameter.value"></a>

- *Type:* object

---

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle"></a>

```csharp
private void PutLifecycle(BackupPlanRuleLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `ResetCompletionWindow` <a name="ResetCompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow"></a>

```csharp
private void ResetCompletionWindow()
```

##### `ResetCopyAction` <a name="ResetCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction"></a>

```csharp
private void ResetCopyAction()
```

##### `ResetEnableContinuousBackup` <a name="ResetEnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```csharp
private void ResetEnableContinuousBackup()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle"></a>

```csharp
private void ResetLifecycle()
```

##### `ResetRecoveryPointTags` <a name="ResetRecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```csharp
private void ResetRecoveryPointTags()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartWindow` <a name="ResetStartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow"></a>

```csharp
private void ResetStartWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction">CopyAction</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput">CompletionWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput">CopyActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput">EnableContinuousBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput">RecoveryPointTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput">StartWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput">TargetVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow">CompletionWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow">StartWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName">TargetVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyAction`<sup>Required</sup> <a name="CopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction"></a>

```csharp
public BackupPlanRuleCopyActionList CopyAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a>

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle"></a>

```csharp
public BackupPlanRuleLifecycleOutputReference Lifecycle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a>

---

##### `CompletionWindowInput`<sup>Optional</sup> <a name="CompletionWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput"></a>

```csharp
public double CompletionWindowInput { get; }
```

- *Type:* double

---

##### `CopyActionInput`<sup>Optional</sup> <a name="CopyActionInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput"></a>

```csharp
public object CopyActionInput { get; }
```

- *Type:* object

---

##### `EnableContinuousBackupInput`<sup>Optional</sup> <a name="EnableContinuousBackupInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```csharp
public object EnableContinuousBackupInput { get; }
```

- *Type:* object

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput"></a>

```csharp
public BackupPlanRuleLifecycle LifecycleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `RecoveryPointTagsInput`<sup>Optional</sup> <a name="RecoveryPointTagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RecoveryPointTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartWindowInput`<sup>Optional</sup> <a name="StartWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput"></a>

```csharp
public double StartWindowInput { get; }
```

- *Type:* double

---

##### `TargetVaultNameInput`<sup>Optional</sup> <a name="TargetVaultNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput"></a>

```csharp
public string TargetVaultNameInput { get; }
```

- *Type:* string

---

##### `CompletionWindow`<sup>Required</sup> <a name="CompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow"></a>

```csharp
public double CompletionWindow { get; }
```

- *Type:* double

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```csharp
public object EnableContinuousBackup { get; }
```

- *Type:* object

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RecoveryPointTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartWindow`<sup>Required</sup> <a name="StartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow"></a>

```csharp
public double StartWindow { get; }
```

- *Type:* double

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName"></a>

```csharp
public string TargetVaultName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



