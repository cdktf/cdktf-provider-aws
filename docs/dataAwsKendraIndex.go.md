# `dataAwsKendraIndex` Submodule <a name="`dataAwsKendraIndex` Submodule" id="@cdktf/provider-aws.dataAwsKendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraIndex <a name="DataAwsKendraIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndex(scope Construct, id *string, config DataAwsKendraIndexConfig) DataAwsKendraIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig">DataAwsKendraIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig">DataAwsKendraIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.DataAwsKendraIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.DataAwsKendraIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.DataAwsKendraIndex_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.capacityUnits">CapacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList">DataAwsKendraIndexCapacityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.documentMetadataConfigurationUpdates">DocumentMetadataConfigurationUpdates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.indexStatistics">IndexStatistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList">DataAwsKendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList">DataAwsKendraIndexServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userContextPolicy">UserContextPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userGroupResolutionConfiguration">UserGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList">DataAwsKendraIndexUserGroupResolutionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userTokenConfigurations">UserTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList">DataAwsKendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.capacityUnits"></a>

```go
func CapacityUnits() DataAwsKendraIndexCapacityUnitsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList">DataAwsKendraIndexCapacityUnitsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DocumentMetadataConfigurationUpdates`<sup>Required</sup> <a name="DocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.documentMetadataConfigurationUpdates"></a>

```go
func DocumentMetadataConfigurationUpdates() DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `IndexStatistics`<sup>Required</sup> <a name="IndexStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.indexStatistics"></a>

```go
func IndexStatistics() DataAwsKendraIndexIndexStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList">DataAwsKendraIndexIndexStatisticsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.serverSideEncryptionConfiguration"></a>

```go
func ServerSideEncryptionConfiguration() DataAwsKendraIndexServerSideEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList">DataAwsKendraIndexServerSideEncryptionConfigurationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UserContextPolicy`<sup>Required</sup> <a name="UserContextPolicy" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userContextPolicy"></a>

```go
func UserContextPolicy() *string
```

- *Type:* *string

---

##### `UserGroupResolutionConfiguration`<sup>Required</sup> <a name="UserGroupResolutionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userGroupResolutionConfiguration"></a>

```go
func UserGroupResolutionConfiguration() DataAwsKendraIndexUserGroupResolutionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList">DataAwsKendraIndexUserGroupResolutionConfigurationList</a>

---

##### `UserTokenConfigurations`<sup>Required</sup> <a name="UserTokenConfigurations" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.userTokenConfigurations"></a>

```go
func UserTokenConfigurations() DataAwsKendraIndexUserTokenConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList">DataAwsKendraIndexUserTokenConfigurationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraIndexCapacityUnits <a name="DataAwsKendraIndexCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexCapacityUnits {

}
```


### DataAwsKendraIndexConfig <a name="DataAwsKendraIndexConfig" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#id DataAwsKendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_index#tags DataAwsKendraIndex#tags}.

---

### DataAwsKendraIndexDocumentMetadataConfigurationUpdates <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates {

}
```


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance {

}
```


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch {

}
```


### DataAwsKendraIndexIndexStatistics <a name="DataAwsKendraIndexIndexStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexIndexStatistics {

}
```


### DataAwsKendraIndexIndexStatisticsFaqStatistics <a name="DataAwsKendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexIndexStatisticsFaqStatistics {

}
```


### DataAwsKendraIndexIndexStatisticsTextDocumentStatistics <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics {

}
```


### DataAwsKendraIndexServerSideEncryptionConfiguration <a name="DataAwsKendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexServerSideEncryptionConfiguration {

}
```


### DataAwsKendraIndexUserGroupResolutionConfiguration <a name="DataAwsKendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexUserGroupResolutionConfiguration {

}
```


### DataAwsKendraIndexUserTokenConfigurations <a name="DataAwsKendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexUserTokenConfigurations {

}
```


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {

}
```


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

&dataawskendraindex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraIndexCapacityUnitsList <a name="DataAwsKendraIndexCapacityUnitsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexCapacityUnitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexCapacityUnitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexCapacityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexCapacityUnitsOutputReference <a name="DataAwsKendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexCapacityUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexCapacityUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">QueryCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">StorageCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits">DataAwsKendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryCapacityUnits`<sup>Required</sup> <a name="QueryCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```go
func QueryCapacityUnits() *f64
```

- *Type:* *f64

---

##### `StorageCapacityUnits`<sup>Required</sup> <a name="StorageCapacityUnits" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```go
func StorageCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexCapacityUnits">DataAwsKendraIndexCapacityUnits</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexDocumentMetadataConfigurationUpdatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">Relevance</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">Search</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates">DataAwsKendraIndexDocumentMetadataConfigurationUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Relevance`<sup>Required</sup> <a name="Relevance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```go
func Relevance() DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList</a>

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```go
func Search() DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexDocumentMetadataConfigurationUpdates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdates">DataAwsKendraIndexDocumentMetadataConfigurationUpdates</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">Freshness</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">Importance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">RankOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">ValuesImportanceMap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Freshness`<sup>Required</sup> <a name="Freshness" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```go
func Freshness() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```go
func Importance() *f64
```

- *Type:* *f64

---

##### `RankOrder`<sup>Required</sup> <a name="RankOrder" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```go
func RankOrder() *string
```

- *Type:* *string

---

##### `ValuesImportanceMap`<sup>Required</sup> <a name="ValuesImportanceMap" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```go
func ValuesImportanceMap() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">Displayable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">Facetable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">Searchable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">Sortable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Displayable`<sup>Required</sup> <a name="Displayable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```go
func Displayable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Facetable`<sup>Required</sup> <a name="Facetable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```go
func Facetable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Searchable`<sup>Required</sup> <a name="Searchable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```go
func Searchable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Sortable`<sup>Required</sup> <a name="Sortable" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```go
func Sortable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch">DataAwsKendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### DataAwsKendraIndexIndexStatisticsFaqStatisticsList <a name="DataAwsKendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexIndexStatisticsFaqStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexIndexStatisticsFaqStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">IndexedQuestionAnswersCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics">DataAwsKendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexedQuestionAnswersCount`<sup>Required</sup> <a name="IndexedQuestionAnswersCount" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```go
func IndexedQuestionAnswersCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexIndexStatisticsFaqStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatistics">DataAwsKendraIndexIndexStatisticsFaqStatistics</a>

---


### DataAwsKendraIndexIndexStatisticsList <a name="DataAwsKendraIndexIndexStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexIndexStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexIndexStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexIndexStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexIndexStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexIndexStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexIndexStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.faqStatistics">FaqStatistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList">DataAwsKendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">TextDocumentStatistics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList">DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics">DataAwsKendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FaqStatistics`<sup>Required</sup> <a name="FaqStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```go
func FaqStatistics() DataAwsKendraIndexIndexStatisticsFaqStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsFaqStatisticsList">DataAwsKendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `TextDocumentStatistics`<sup>Required</sup> <a name="TextDocumentStatistics" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```go
func TextDocumentStatistics() DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList">DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexIndexStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatistics">DataAwsKendraIndexIndexStatistics</a>

---


### DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">IndexedTextBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">IndexedTextDocumentsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics">DataAwsKendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexedTextBytes`<sup>Required</sup> <a name="IndexedTextBytes" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```go
func IndexedTextBytes() *f64
```

- *Type:* *f64

---

##### `IndexedTextDocumentsCount`<sup>Required</sup> <a name="IndexedTextDocumentsCount" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```go
func IndexedTextDocumentsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexIndexStatisticsTextDocumentStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexIndexStatisticsTextDocumentStatistics">DataAwsKendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### DataAwsKendraIndexServerSideEncryptionConfigurationList <a name="DataAwsKendraIndexServerSideEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexServerSideEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexServerSideEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference <a name="DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexServerSideEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration">DataAwsKendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexServerSideEncryptionConfiguration">DataAwsKendraIndexServerSideEncryptionConfiguration</a>

---


### DataAwsKendraIndexUserGroupResolutionConfigurationList <a name="DataAwsKendraIndexUserGroupResolutionConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserGroupResolutionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexUserGroupResolutionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference <a name="DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserGroupResolutionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">UserGroupResolutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration">DataAwsKendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserGroupResolutionMode`<sup>Required</sup> <a name="UserGroupResolutionMode" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```go
func UserGroupResolutionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexUserGroupResolutionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserGroupResolutionConfiguration">DataAwsKendraIndexUserGroupResolutionConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```go
func GroupAttributeField() *string
```

- *Type:* *string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```go
func UserNameAttributeField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">ClaimRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">KeyLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimRegex`<sup>Required</sup> <a name="ClaimRegex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```go
func ClaimRegex() *string
```

- *Type:* *string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```go
func GroupAttributeField() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```go
func KeyLocation() *string
```

- *Type:* *string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```go
func SecretsManagerArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```go
func UserNameAttributeField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### DataAwsKendraIndexUserTokenConfigurationsList <a name="DataAwsKendraIndexUserTokenConfigurationsList" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserTokenConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraIndexUserTokenConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsKendraIndexUserTokenConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraIndexUserTokenConfigurationsOutputReference <a name="DataAwsKendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraindex"

dataawskendraindex.NewDataAwsKendraIndexUserTokenConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraIndexUserTokenConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">JsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">JwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations">DataAwsKendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonTokenTypeConfiguration`<sup>Required</sup> <a name="JsonTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```go
func JsonTokenTypeConfiguration() DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationList</a>

---

##### `JwtTokenTypeConfiguration`<sup>Required</sup> <a name="JwtTokenTypeConfiguration" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```go
func JwtTokenTypeConfiguration() DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList">DataAwsKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraIndexUserTokenConfigurations
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraIndex.DataAwsKendraIndexUserTokenConfigurations">DataAwsKendraIndexUserTokenConfigurations</a>

---



