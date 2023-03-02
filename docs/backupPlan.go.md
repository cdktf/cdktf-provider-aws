# `backupPlan` Submodule <a name="`backupPlan` Submodule" id="@cdktf/provider-aws.backupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPlan <a name="BackupPlan" id="@cdktf/provider-aws.backupPlan.BackupPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan aws_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlan(scope Construct, id *string, config BackupPlanConfig) BackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupPlan.BackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdvancedBackupSetting` <a name="PutAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting"></a>

```go
func PutAdvancedBackupSetting(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlan.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdvancedBackupSetting` <a name="ResetAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting"></a>

```go
func ResetAdvancedBackupSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupPlan.BackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting">AdvancedBackupSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput">AdvancedBackupSettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedBackupSetting`<sup>Required</sup> <a name="AdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting"></a>

```go
func AdvancedBackupSetting() BackupPlanAdvancedBackupSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.rule"></a>

```go
func Rule() BackupPlanRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AdvancedBackupSettingInput`<sup>Optional</sup> <a name="AdvancedBackupSettingInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput"></a>

```go
func AdvancedBackupSettingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPlanAdvancedBackupSetting <a name="BackupPlanAdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanAdvancedBackupSetting {
	BackupOptions: *map[string]*string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions">BackupOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}. |

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions"></a>

```go
BackupOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#backup_options BackupPlan#backup_options}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#resource_type BackupPlan#resource_type}.

---

### BackupPlanConfig <a name="BackupPlanConfig" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Rule: interface{},
	AdvancedBackupSetting: interface{},
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting">AdvancedBackupSetting</a></code> | <code>interface{}</code> | advanced_backup_setting block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#name BackupPlan#name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule BackupPlan#rule}

---

##### `AdvancedBackupSetting`<sup>Optional</sup> <a name="AdvancedBackupSetting" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting"></a>

```go
AdvancedBackupSetting interface{}
```

- *Type:* interface{}

advanced_backup_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#id BackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags BackupPlan#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#tags_all BackupPlan#tags_all}.

---

### BackupPlanRule <a name="BackupPlanRule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRule {
	RuleName: *string,
	TargetVaultName: *string,
	CompletionWindow: *f64,
	CopyAction: interface{},
	EnableContinuousBackup: interface{},
	Lifecycle: github.com/cdktf/cdktf-provider-aws-go/aws.backupPlan.BackupPlanRuleLifecycle,
	RecoveryPointTags: *map[string]*string,
	Schedule: *string,
	StartWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName">TargetVaultName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow">CompletionWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction">CopyAction</a></code> | <code>interface{}</code> | copy_action block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | lifecycle block. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow">StartWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}. |

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#rule_name BackupPlan#rule_name}.

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName"></a>

```go
TargetVaultName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#target_vault_name BackupPlan#target_vault_name}.

---

##### `CompletionWindow`<sup>Optional</sup> <a name="CompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.completionWindow"></a>

```go
CompletionWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#completion_window BackupPlan#completion_window}.

---

##### `CopyAction`<sup>Optional</sup> <a name="CopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.copyAction"></a>

```go
CopyAction interface{}
```

- *Type:* interface{}

copy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#copy_action BackupPlan#copy_action}

---

##### `EnableContinuousBackup`<sup>Optional</sup> <a name="EnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup"></a>

```go
EnableContinuousBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.lifecycle"></a>

```go
Lifecycle BackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

##### `RecoveryPointTags`<sup>Optional</sup> <a name="RecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags"></a>

```go
RecoveryPointTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#schedule BackupPlan#schedule}.

---

##### `StartWindow`<sup>Optional</sup> <a name="StartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRule.property.startWindow"></a>

```go
StartWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#start_window BackupPlan#start_window}.

---

### BackupPlanRuleCopyAction <a name="BackupPlanRuleCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleCopyAction {
	DestinationVaultArn: *string,
	Lifecycle: github.com/cdktf/cdktf-provider-aws-go/aws.backupPlan.BackupPlanRuleCopyActionLifecycle,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | lifecycle block. |

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn"></a>

```go
DestinationVaultArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle"></a>

```go
Lifecycle BackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#lifecycle BackupPlan#lifecycle}

---

### BackupPlanRuleCopyActionLifecycle <a name="BackupPlanRuleCopyActionLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleCopyActionLifecycle {
	ColdStorageAfter: *f64,
	DeleteAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `ColdStorageAfter`<sup>Optional</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter"></a>

```go
ColdStorageAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `DeleteAfter`<sup>Optional</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter"></a>

```go
DeleteAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

### BackupPlanRuleLifecycle <a name="BackupPlanRuleLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleLifecycle {
	ColdStorageAfter: *f64,
	DeleteAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}. |

---

##### `ColdStorageAfter`<sup>Optional</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter"></a>

```go
ColdStorageAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `DeleteAfter`<sup>Optional</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter"></a>

```go
DeleteAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan#delete_after BackupPlan#delete_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPlanAdvancedBackupSettingList <a name="BackupPlanAdvancedBackupSettingList" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanAdvancedBackupSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanAdvancedBackupSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get"></a>

```go
func Get(index *f64) BackupPlanAdvancedBackupSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanAdvancedBackupSettingOutputReference <a name="BackupPlanAdvancedBackupSettingOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanAdvancedBackupSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanAdvancedBackupSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput">BackupOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions">BackupOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupOptionsInput`<sup>Optional</sup> <a name="BackupOptionsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput"></a>

```go
func BackupOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions"></a>

```go
func BackupOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleCopyActionLifecycleOutputReference <a name="BackupPlanRuleCopyActionLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleCopyActionLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPlanRuleCopyActionLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColdStorageAfter` <a name="ResetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter"></a>

```go
func ResetColdStorageAfter()
```

##### `ResetDeleteAfter` <a name="ResetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter"></a>

```go
func ResetDeleteAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput">ColdStorageAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput">DeleteAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageAfterInput`<sup>Optional</sup> <a name="ColdStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput"></a>

```go
func ColdStorageAfterInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterInput`<sup>Optional</sup> <a name="DeleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput"></a>

```go
func DeleteAfterInput() *f64
```

- *Type:* *f64

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter"></a>

```go
func ColdStorageAfter() *f64
```

- *Type:* *f64

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter"></a>

```go
func DeleteAfter() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---


### BackupPlanRuleCopyActionList <a name="BackupPlanRuleCopyActionList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleCopyActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanRuleCopyActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get"></a>

```go
func Get(index *f64) BackupPlanRuleCopyActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleCopyActionOutputReference <a name="BackupPlanRuleCopyActionOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleCopyActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanRuleCopyActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle"></a>

```go
func PutLifecycle(value BackupPlanRuleCopyActionLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle"></a>

```go
func ResetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput">DestinationVaultArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle"></a>

```go
func Lifecycle() BackupPlanRuleCopyActionLifecycleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a>

---

##### `DestinationVaultArnInput`<sup>Optional</sup> <a name="DestinationVaultArnInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput"></a>

```go
func DestinationVaultArnInput() *string
```

- *Type:* *string

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput"></a>

```go
func LifecycleInput() BackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn"></a>

```go
func DestinationVaultArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleLifecycleOutputReference <a name="BackupPlanRuleLifecycleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPlanRuleLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColdStorageAfter` <a name="ResetColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter"></a>

```go
func ResetColdStorageAfter()
```

##### `ResetDeleteAfter` <a name="ResetDeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter"></a>

```go
func ResetDeleteAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput">ColdStorageAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput">DeleteAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageAfterInput`<sup>Optional</sup> <a name="ColdStorageAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput"></a>

```go
func ColdStorageAfterInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterInput`<sup>Optional</sup> <a name="DeleteAfterInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput"></a>

```go
func DeleteAfterInput() *f64
```

- *Type:* *f64

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter"></a>

```go
func ColdStorageAfter() *f64
```

- *Type:* *f64

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter"></a>

```go
func DeleteAfter() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---


### BackupPlanRuleList <a name="BackupPlanRuleList" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get"></a>

```go
func Get(index *f64) BackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleOutputReference <a name="BackupPlanRuleOutputReference" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyAction` <a name="PutCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction"></a>

```go
func PutCopyAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle"></a>

```go
func PutLifecycle(value BackupPlanRuleLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `ResetCompletionWindow` <a name="ResetCompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow"></a>

```go
func ResetCompletionWindow()
```

##### `ResetCopyAction` <a name="ResetCopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction"></a>

```go
func ResetCopyAction()
```

##### `ResetEnableContinuousBackup` <a name="ResetEnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```go
func ResetEnableContinuousBackup()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle"></a>

```go
func ResetLifecycle()
```

##### `ResetRecoveryPointTags` <a name="ResetRecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```go
func ResetRecoveryPointTags()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStartWindow` <a name="ResetStartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow"></a>

```go
func ResetStartWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction">CopyAction</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput">CompletionWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput">CopyActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput">EnableContinuousBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput">RecoveryPointTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput">StartWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput">TargetVaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow">CompletionWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow">StartWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName">TargetVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyAction`<sup>Required</sup> <a name="CopyAction" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction"></a>

```go
func CopyAction() BackupPlanRuleCopyActionList
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a>

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle"></a>

```go
func Lifecycle() BackupPlanRuleLifecycleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a>

---

##### `CompletionWindowInput`<sup>Optional</sup> <a name="CompletionWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput"></a>

```go
func CompletionWindowInput() *f64
```

- *Type:* *f64

---

##### `CopyActionInput`<sup>Optional</sup> <a name="CopyActionInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput"></a>

```go
func CopyActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableContinuousBackupInput`<sup>Optional</sup> <a name="EnableContinuousBackupInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```go
func EnableContinuousBackupInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput"></a>

```go
func LifecycleInput() BackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `RecoveryPointTagsInput`<sup>Optional</sup> <a name="RecoveryPointTagsInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```go
func RecoveryPointTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `StartWindowInput`<sup>Optional</sup> <a name="StartWindowInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput"></a>

```go
func StartWindowInput() *f64
```

- *Type:* *f64

---

##### `TargetVaultNameInput`<sup>Optional</sup> <a name="TargetVaultNameInput" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput"></a>

```go
func TargetVaultNameInput() *string
```

- *Type:* *string

---

##### `CompletionWindow`<sup>Required</sup> <a name="CompletionWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow"></a>

```go
func CompletionWindow() *f64
```

- *Type:* *f64

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```go
func EnableContinuousBackup() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```go
func RecoveryPointTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `StartWindow`<sup>Required</sup> <a name="StartWindow" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow"></a>

```go
func StartWindow() *f64
```

- *Type:* *f64

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName"></a>

```go
func TargetVaultName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



