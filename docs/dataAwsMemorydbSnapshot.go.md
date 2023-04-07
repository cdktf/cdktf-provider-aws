# `dataAwsMemorydbSnapshot` Submodule <a name="`dataAwsMemorydbSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMemorydbSnapshot <a name="DataAwsMemorydbSnapshot" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot aws_memorydb_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

dataawsmemorydbsnapshot.NewDataAwsMemorydbSnapshot(scope Construct, id *string, config DataAwsMemorydbSnapshotConfig) DataAwsMemorydbSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig">DataAwsMemorydbSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig">DataAwsMemorydbSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

dataawsmemorydbsnapshot.DataAwsMemorydbSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

dataawsmemorydbsnapshot.DataAwsMemorydbSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

dataawsmemorydbsnapshot.DataAwsMemorydbSnapshot_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.clusterConfiguration">ClusterConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList">DataAwsMemorydbSnapshotClusterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterConfiguration`<sup>Required</sup> <a name="ClusterConfiguration" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.clusterConfiguration"></a>

```go
func ClusterConfiguration() DataAwsMemorydbSnapshotClusterConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList">DataAwsMemorydbSnapshotClusterConfigurationList</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMemorydbSnapshotClusterConfiguration <a name="DataAwsMemorydbSnapshotClusterConfiguration" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

&dataawsmemorydbsnapshot.DataAwsMemorydbSnapshotClusterConfiguration {

}
```


### DataAwsMemorydbSnapshotConfig <a name="DataAwsMemorydbSnapshotConfig" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

&dataawsmemorydbsnapshot.DataAwsMemorydbSnapshotConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot#name DataAwsMemorydbSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot#id DataAwsMemorydbSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot#tags DataAwsMemorydbSnapshot#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot#name DataAwsMemorydbSnapshot#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot#id DataAwsMemorydbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/memorydb_snapshot#tags DataAwsMemorydbSnapshot#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMemorydbSnapshotClusterConfigurationList <a name="DataAwsMemorydbSnapshotClusterConfigurationList" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

dataawsmemorydbsnapshot.NewDataAwsMemorydbSnapshotClusterConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMemorydbSnapshotClusterConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsMemorydbSnapshotClusterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMemorydbSnapshotClusterConfigurationOutputReference <a name="DataAwsMemorydbSnapshotClusterConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsmemorydbsnapshot"

dataawsmemorydbsnapshot.NewDataAwsMemorydbSnapshotClusterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMemorydbSnapshotClusterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.numShards">NumShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfiguration">DataAwsMemorydbSnapshotClusterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumShards`<sup>Required</sup> <a name="NumShards" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.numShards"></a>

```go
func NumShards() *f64
```

- *Type:* *f64

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.subnetGroupName"></a>

```go
func SubnetGroupName() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMemorydbSnapshotClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMemorydbSnapshot.DataAwsMemorydbSnapshotClusterConfiguration">DataAwsMemorydbSnapshotClusterConfiguration</a>

---



