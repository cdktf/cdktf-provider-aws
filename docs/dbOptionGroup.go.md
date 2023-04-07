# `dbOptionGroup` Submodule <a name="`dbOptionGroup` Submodule" id="@cdktf/provider-aws.dbOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbOptionGroup <a name="DbOptionGroup" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group aws_db_option_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.NewDbOptionGroup(scope Construct, id *string, config DbOptionGroupConfig) DbOptionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig">DbOptionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig">DbOptionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption">PutOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption">ResetOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription">ResetOptionGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOption` <a name="PutOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption"></a>

```go
func PutOption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts"></a>

```go
func PutTimeouts(value DbOptionGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetOption` <a name="ResetOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption"></a>

```go
func ResetOption()
```

##### `ResetOptionGroupDescription` <a name="ResetOptionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription"></a>

```go
func ResetOptionGroupDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.DbOptionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.DbOptionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.DbOptionGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option">Option</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput">EngineNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput">MajorEngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput">OptionGroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput">OptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName">EngineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription">OptionGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option"></a>

```go
func Option() DbOptionGroupOptionList
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts"></a>

```go
func Timeouts() DbOptionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a>

---

##### `EngineNameInput`<sup>Optional</sup> <a name="EngineNameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput"></a>

```go
func EngineNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MajorEngineVersionInput`<sup>Optional</sup> <a name="MajorEngineVersionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput"></a>

```go
func MajorEngineVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `OptionGroupDescriptionInput`<sup>Optional</sup> <a name="OptionGroupDescriptionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput"></a>

```go
func OptionGroupDescriptionInput() *string
```

- *Type:* *string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput"></a>

```go
func OptionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName"></a>

```go
func EngineName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion"></a>

```go
func MajorEngineVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `OptionGroupDescription`<sup>Required</sup> <a name="OptionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription"></a>

```go
func OptionGroupDescription() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DbOptionGroupConfig <a name="DbOptionGroupConfig" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

&dboptiongroup.DbOptionGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EngineName: *string,
	MajorEngineVersion: *string,
	Id: *string,
	Name: *string,
	NamePrefix: *string,
	Option: interface{},
	OptionGroupDescription: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dbOptionGroup.DbOptionGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName">EngineName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option">Option</a></code> | <code>interface{}</code> | option block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription">OptionGroupDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName"></a>

```go
EngineName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}.

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion"></a>

```go
MajorEngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}.

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option"></a>

```go
Option interface{}
```

- *Type:* interface{}

option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option DbOptionGroup#option}

---

##### `OptionGroupDescription`<sup>Optional</sup> <a name="OptionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription"></a>

```go
OptionGroupDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts"></a>

```go
Timeouts DbOptionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#timeouts DbOptionGroup#timeouts}

---

### DbOptionGroupOption <a name="DbOptionGroupOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

&dboptiongroup.DbOptionGroupOption {
	OptionName: *string,
	DbSecurityGroupMemberships: *[]*string,
	OptionSettings: interface{},
	Port: *f64,
	Version: *string,
	VpcSecurityGroupMemberships: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName">OptionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_name DbOptionGroup#option_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships">DbSecurityGroupMemberships</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings">OptionSettings</a></code> | <code>interface{}</code> | option_settings block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#port DbOptionGroup#port}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#version DbOptionGroup#version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships">VpcSecurityGroupMemberships</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}. |

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName"></a>

```go
OptionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_name DbOptionGroup#option_name}.

---

##### `DbSecurityGroupMemberships`<sup>Optional</sup> <a name="DbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships"></a>

```go
DbSecurityGroupMemberships *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}.

---

##### `OptionSettings`<sup>Optional</sup> <a name="OptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings"></a>

```go
OptionSettings interface{}
```

- *Type:* interface{}

option_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_settings DbOptionGroup#option_settings}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#port DbOptionGroup#port}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#version DbOptionGroup#version}.

---

##### `VpcSecurityGroupMemberships`<sup>Optional</sup> <a name="VpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships"></a>

```go
VpcSecurityGroupMemberships *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}.

---

### DbOptionGroupOptionOptionSettings <a name="DbOptionGroupOptionOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

&dboptiongroup.DbOptionGroupOptionOptionSettings {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#value DbOptionGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#value DbOptionGroup#value}.

---

### DbOptionGroupTimeouts <a name="DbOptionGroupTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

&dboptiongroup.DbOptionGroupTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbOptionGroupOptionList <a name="DbOptionGroupOptionList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.NewDbOptionGroupOptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DbOptionGroupOptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get"></a>

```go
func Get(index *f64) DbOptionGroupOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DbOptionGroupOptionOptionSettingsList <a name="DbOptionGroupOptionOptionSettingsList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.NewDbOptionGroupOptionOptionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DbOptionGroupOptionOptionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get"></a>

```go
func Get(index *f64) DbOptionGroupOptionOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DbOptionGroupOptionOptionSettingsOutputReference <a name="DbOptionGroupOptionOptionSettingsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.NewDbOptionGroupOptionOptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DbOptionGroupOptionOptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DbOptionGroupOptionOutputReference <a name="DbOptionGroupOptionOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.NewDbOptionGroupOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DbOptionGroupOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings">PutOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships">ResetDbSecurityGroupMemberships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings">ResetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships">ResetVpcSecurityGroupMemberships</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptionSettings` <a name="PutOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings"></a>

```go
func PutOptionSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDbSecurityGroupMemberships` <a name="ResetDbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships"></a>

```go
func ResetDbSecurityGroupMemberships()
```

##### `ResetOptionSettings` <a name="ResetOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings"></a>

```go
func ResetOptionSettings()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVpcSecurityGroupMemberships` <a name="ResetVpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships"></a>

```go
func ResetVpcSecurityGroupMemberships()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput">DbSecurityGroupMembershipsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput">OptionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput">OptionSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput">VpcSecurityGroupMembershipsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships">DbSecurityGroupMemberships</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName">OptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships">VpcSecurityGroupMemberships</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings"></a>

```go
func OptionSettings() DbOptionGroupOptionOptionSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a>

---

##### `DbSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="DbSecurityGroupMembershipsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```go
func DbSecurityGroupMembershipsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptionNameInput`<sup>Optional</sup> <a name="OptionNameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput"></a>

```go
func OptionNameInput() *string
```

- *Type:* *string

---

##### `OptionSettingsInput`<sup>Optional</sup> <a name="OptionSettingsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput"></a>

```go
func OptionSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="VpcSecurityGroupMembershipsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```go
func VpcSecurityGroupMembershipsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbSecurityGroupMemberships`<sup>Required</sup> <a name="DbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships"></a>

```go
func DbSecurityGroupMemberships() *[]*string
```

- *Type:* *[]*string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName"></a>

```go
func OptionName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupMemberships`<sup>Required</sup> <a name="VpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships"></a>

```go
func VpcSecurityGroupMemberships() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DbOptionGroupTimeoutsOutputReference <a name="DbOptionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dboptiongroup"

dboptiongroup.NewDbOptionGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DbOptionGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



