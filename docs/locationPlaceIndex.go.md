# `locationPlaceIndex` Submodule <a name="`locationPlaceIndex` Submodule" id="@cdktf/provider-aws.locationPlaceIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationPlaceIndex <a name="LocationPlaceIndex" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/location_place_index aws_location_place_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

locationplaceindex.NewLocationPlaceIndex(scope Construct, id *string, config LocationPlaceIndexConfig) LocationPlaceIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig">LocationPlaceIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig">LocationPlaceIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration">PutDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDataSourceConfiguration">ResetDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDataSourceConfiguration` <a name="PutDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration"></a>

```go
func PutDataSourceConfiguration(value LocationPlaceIndexDataSourceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---

##### `ResetDataSourceConfiguration` <a name="ResetDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDataSourceConfiguration"></a>

```go
func ResetDataSourceConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

locationplaceindex.LocationPlaceIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

locationplaceindex.LocationPlaceIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

locationplaceindex.LocationPlaceIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfiguration">DataSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference">LocationPlaceIndexDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexArn">IndexArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfigurationInput">DataSourceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSourceConfiguration`<sup>Required</sup> <a name="DataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfiguration"></a>

```go
func DataSourceConfiguration() LocationPlaceIndexDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference">LocationPlaceIndexDataSourceConfigurationOutputReference</a>

---

##### `IndexArn`<sup>Required</sup> <a name="IndexArn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexArn"></a>

```go
func IndexArn() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataSourceConfigurationInput`<sup>Optional</sup> <a name="DataSourceConfigurationInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfigurationInput"></a>

```go
func DataSourceConfigurationInput() LocationPlaceIndexDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LocationPlaceIndexConfig <a name="LocationPlaceIndexConfig" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

&locationplaceindex.LocationPlaceIndexConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSource: *string,
	IndexName: *string,
	DataSourceConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSource">DataSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSourceConfiguration">DataSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | data_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}.

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}.

---

##### `DataSourceConfiguration`<sup>Optional</sup> <a name="DataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSourceConfiguration"></a>

```go
DataSourceConfiguration LocationPlaceIndexDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

data_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source_configuration LocationPlaceIndex#data_source_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}.

---

### LocationPlaceIndexDataSourceConfiguration <a name="LocationPlaceIndexDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

&locationplaceindex.LocationPlaceIndexDataSourceConfiguration {
	IntendedUse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.property.intendedUse">IntendedUse</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}. |

---

##### `IntendedUse`<sup>Optional</sup> <a name="IntendedUse" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.property.intendedUse"></a>

```go
IntendedUse *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}.

---

## Classes <a name="Classes" id="Classes"></a>

### LocationPlaceIndexDataSourceConfigurationOutputReference <a name="LocationPlaceIndexDataSourceConfigurationOutputReference" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/locationplaceindex"

locationplaceindex.NewLocationPlaceIndexDataSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LocationPlaceIndexDataSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resetIntendedUse">ResetIntendedUse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntendedUse` <a name="ResetIntendedUse" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resetIntendedUse"></a>

```go
func ResetIntendedUse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUseInput">IntendedUseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse">IntendedUse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntendedUseInput`<sup>Optional</sup> <a name="IntendedUseInput" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUseInput"></a>

```go
func IntendedUseInput() *string
```

- *Type:* *string

---

##### `IntendedUse`<sup>Required</sup> <a name="IntendedUse" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse"></a>

```go
func IntendedUse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() LocationPlaceIndexDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---



