# `dataAwsConnectUserHierarchyGroup` Submodule <a name="`dataAwsConnectUserHierarchyGroup` Submodule" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectUserHierarchyGroup <a name="DataAwsConnectUserHierarchyGroup" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group aws_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroup(scope Construct, id *string, config DataAwsConnectUserHierarchyGroupConfig) DataAwsConnectUserHierarchyGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig">DataAwsConnectUserHierarchyGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig">DataAwsConnectUserHierarchyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetHierarchyGroupId">ResetHierarchyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetHierarchyGroupId` <a name="ResetHierarchyGroupId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetHierarchyGroupId"></a>

```go
func ResetHierarchyGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyPath">HierarchyPath</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList">DataAwsConnectUserHierarchyGroupHierarchyPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.levelId">LevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupIdInput">HierarchyGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupId">HierarchyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HierarchyPath`<sup>Required</sup> <a name="HierarchyPath" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyPath"></a>

```go
func HierarchyPath() DataAwsConnectUserHierarchyGroupHierarchyPathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList">DataAwsConnectUserHierarchyGroupHierarchyPathList</a>

---

##### `LevelId`<sup>Required</sup> <a name="LevelId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.levelId"></a>

```go
func LevelId() *string
```

- *Type:* *string

---

##### `HierarchyGroupIdInput`<sup>Optional</sup> <a name="HierarchyGroupIdInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupIdInput"></a>

```go
func HierarchyGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HierarchyGroupId`<sup>Required</sup> <a name="HierarchyGroupId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.hierarchyGroupId"></a>

```go
func HierarchyGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectUserHierarchyGroupConfig <a name="DataAwsConnectUserHierarchyGroupConfig" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	HierarchyGroupId: *string,
	Id: *string,
	Name: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.hierarchyGroupId">HierarchyGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}.

---

##### `HierarchyGroupId`<sup>Optional</sup> <a name="HierarchyGroupId" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.hierarchyGroupId"></a>

```go
HierarchyGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}.

---

### DataAwsConnectUserHierarchyGroupHierarchyPath <a name="DataAwsConnectUserHierarchyGroupHierarchyPath" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupHierarchyPath {

}
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive {

}
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour {

}
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne {

}
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree {

}
```


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

&dataawsconnectuserhierarchygroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get"></a>

```go
func Get(index *f64) DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get"></a>

```go
func Get(index *f64) DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get"></a>

```go
func Get(index *f64) DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get"></a>

```go
func Get(index *f64) DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get"></a>

```go
func Get(index *f64) DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo</a>

---


### DataAwsConnectUserHierarchyGroupHierarchyPathList <a name="DataAwsConnectUserHierarchyGroupHierarchyPathList" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get"></a>

```go
func Get(index *f64) DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference <a name="DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectuserhierarchygroup"

dataawsconnectuserhierarchygroup.NewDataAwsConnectUserHierarchyGroupHierarchyPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath">DataAwsConnectUserHierarchyGroupHierarchyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelFive`<sup>Required</sup> <a name="LevelFive" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive"></a>

```go
func LevelFive() DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList</a>

---

##### `LevelFour`<sup>Required</sup> <a name="LevelFour" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour"></a>

```go
func LevelFour() DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList</a>

---

##### `LevelOne`<sup>Required</sup> <a name="LevelOne" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne"></a>

```go
func LevelOne() DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList</a>

---

##### `LevelThree`<sup>Required</sup> <a name="LevelThree" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree"></a>

```go
func LevelThree() DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList</a>

---

##### `LevelTwo`<sup>Required</sup> <a name="LevelTwo" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo"></a>

```go
func LevelTwo() DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList">DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsConnectUserHierarchyGroupHierarchyPath
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectUserHierarchyGroup.DataAwsConnectUserHierarchyGroupHierarchyPath">DataAwsConnectUserHierarchyGroupHierarchyPath</a>

---



